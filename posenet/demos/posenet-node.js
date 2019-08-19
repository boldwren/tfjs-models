const tf = require('@tensorflow/tfjs-node');
const posenet = require('@tensorflow-models/posenet');
const {createCanvas, loadImage} = require('canvas');
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

const tryModel = async () => {
  console.log('start');
  const net = await posenet.load(modelConfig);
  const img = await loadImage('./test.jpg');
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const input = tf.browser.fromPixels(canvas);
  const pose = await net.estimateSinglePose(
    input,
    imageScaleFactor,
    flipHorizontal,
    outputStride,
  );
  console.log(pose);
  for (const keypoint of pose.keypoints) {
    console.log(
      `${keypoint.part}: (${keypoint.position.x},${keypoint.position.y})`,
    );
  }
  console.log('end');
};

tryModel();
