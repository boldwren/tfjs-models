const tf = require('@tensorflow/tfjs-node');
const posenet = require('@tensorflow-models/posenet');
const {createCanvas, loadImage} = require('canvas');
const fs = require('fs')
const glob = require('glob')

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
  const net = await posenet.load(modelConfig);

  glob(process.argv[2] + '*.jpeg', async (_err, files) => {
    const results = {}
    let canvas;
    let ctx;

    for (const filename of files) {
      const img = await loadImage(filename);
      if (!canvas) {
        canvas = createCanvas(img.width, img.height);
        ctx = canvas.getContext('2d');
      }
      ctx.drawImage(img, 0, 0);
      const input = tf.browser.fromPixels(canvas);
      let poses = await net.estimatePoses(input, {
        flipHorizontal: false,
        decodingMethod: 'multi-person',
        maxDetections: 6,
        scoreThreshold: 0.15,
        nmsRadius: 30,
      });
      // scale the keypoints so that xMax == 1
      results[filename] = poses.map(pose => ({
        ...pose,
        keypoints: pose.keypoints.map(
            p => ({
              ...p,
              position: {
                x: p.position.x / img.width,
                y: p.position.y / img.width,
              }
            }))
      }));
    }
    console.log(JSON.stringify(results));

  })

};

tryModel();
