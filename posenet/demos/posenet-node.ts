const tf = require('@tensorflow/tfjs-node');
const posenet = require('@tensorflow-models/posenet');
const {createCanvas, loadImage} = require('canvas');
const fs = require('fs')

import {
  drawBoundingBox,
  drawKeypoints,
  drawSkeleton,
} from './demo_util';

const imageScaleFactor = 0.5;
const outputStride = 16;
const flipHorizontal = false;

const defaultQuantBytes = 2;

const defaultMobileNetMultiplier = 0.75;
const defaultMobileNetStride = 16;
const defaultMobileNetInputResolution = 513;

const modelConfig = {
  architecture: 'MobileNetV1',
  outputStride: defaultMobileNetStride,
  inputResolution: defaultMobileNetInputResolution,
  multiplier: defaultMobileNetMultiplier,
  quantBytes: defaultQuantBytes,
};


/**
 * Draws a pose if it passes a minimum confidence onto a canvas.
 * Only the pose's keypoints that pass a minPartConfidence are drawn.
 */
function drawResults(canvas, poses, minPartConfidence, minPoseConfidence) {
  const ctx = canvas.getContext('2d');
  poses.forEach((pose) => {
    if (pose.score >= minPoseConfidence) {
        drawKeypoints(pose.keypoints, minPartConfidence, ctx);

        drawSkeleton(pose.keypoints, minPartConfidence, ctx);

        drawBoundingBox(pose.keypoints, ctx);
    }
  });
}

const tryModel = async () => {
  console.log('start');
  const net = await posenet.load(modelConfig);
  const img = await loadImage('./test.jpg');
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const input = tf.browser.fromPixels(canvas);

  let poses = await net.estimatePoses(input, {
    flipHorizontal: false,
    decodingMethod: 'multi-person',
    maxDetections: 6,
    scoreThreshold: 0.15,
    nmsRadius: 30,
  });

  console.log(poses);
  drawResults(canvas, poses, 0.1, 0.15)
  let out = fs.createWriteStream('./out.png')
  let stream = canvas.pngStream('image/jpeg')
  stream.on('data', (chunk) => out.write(chunk))

  console.log('end');
};

tryModel();
