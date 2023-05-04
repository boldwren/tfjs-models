import {promises as fs} from 'fs';
const glob = require('glob')

async function stitch(filename, staticRootPath, tempDirPath) {

  const featuresFilename = tempDirPath + filename + '.d/poses.json'
  const keyframesFilename = tempDirPath + filename + '.d/keyframes.list'

  const featuresJSON = (await fs.readFile(featuresFilename)).toString();
  const features = JSON.parse(featuresJSON);

  // yeah, I could use `for await (const line of readline.createInterface(...))`
  // but I can't be arsed.
  const keyframesLines =
      (await fs.readFile(keyframesFilename)).toString().split('\n');

  // ffmpeg's jpeg filenames start with 00001, so add some padding.
  const keyframeTimes = [0];
  let inFrameBlock = 0;
  for (let i = 0; i < keyframesLines.length; i += 1) {
    if (keyframesLines[i] == '[FRAME]') {
      inFrameBlock += 1
    } else if (keyframesLines[i] == '[/FRAME]') {
      inFrameBlock -= 1
    } else if (keyframesLines[i].startsWith('pkt_pts_time=')) {
      if (inFrameBlock != 1) {
        throw new Error(`frame blocks are not balanced: ${keyframesFilename}:${i}`)
      }
      keyframeTimes.push(
        parseFloat(keyframesLines[i].replace('pkt_pts_time=', '')))
    }
  }
  if (inFrameBlock != 0) {
    throw new Error(`frame blocks are not balanced at end: ${keyframesFilename}`)
  }

  const result = {};
  for (const frameFilename in features) {
    const [tempDirName, rest] =
        frameFilename.replace(staticRootPath, '').split('/keyframe-');
    const videoFilename = filename.replace(staticRootPath, '');
    if (tempDirName.indexOf(videoFilename) == -1){
      throw new Error(`${tempDirName} does not contain ${videoFilename}`)
    }
    const ts = keyframeTimes[parseFloat(rest.replace('.jpeg', ''))]
    result[videoFilename] = result[videoFilename] || {}
    result[videoFilename][ts] = features[frameFilename]
                                    .filter(pose => pose.score > 0.5)
  }
  return result
}

function main(videoGlob, staticRootPath, tempDirPath){
  let result = {};

  glob(videoGlob, async (_err, filenames) => {
    for (const filename of filenames) {
      result = {
        ...result,
        ...(await stitch(filename, staticRootPath, tempDirPath))
      }
    }

    console.log(JSON.stringify(result))
  })
}


main(process.argv[2], process.argv[3], process.argv[4])
