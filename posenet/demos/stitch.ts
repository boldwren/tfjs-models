import {promises as fs} from 'fs';

async function stitch(featuresFilename, keyframesFilename) {
  const featuresJSON = (await fs.readFile(featuresFilename)).toString();
  const features = JSON.parse(featuresJSON);

  // yeah, I could use `for await (const line of readline.createInterface(...))`
  // but I can't be arsed.
  const keyframesLines =
      (await fs.readFile(keyframesFilename)).toString().split('\n');

  // ffmpeg's jpeg filenames start with 00001, so add some padding.
  const keyframeTimes = [0];

  for (let i = 0; i < keyframesLines.length - 3; i += 3) {
    if (keyframesLines[i] != '[FRAME]') {
      throw new Error(keyframesLines[i])
    }
    keyframeTimes.push(
        parseFloat(keyframesLines[i + 1].replace('pkt_pts_time=', '')))
    if (keyframesLines[i + 2] != '[/FRAME]') {
      throw new Error(keyframesLines[i + 2])
    }
  }

  const result = {};
  for (const frameFilename in features) {
    const [videoFilename, rest] =
        frameFilename.replace('dist/', '').split('.d/keyframe-');
    const ts = keyframeTimes[parseFloat(rest.replace('.jpeg', ''))]
    result[videoFilename] = result[videoFilename] || {}
    result[videoFilename][ts] = features[frameFilename].filter(pose => pose.score > 0.5)
  }
  return result
}

async function main(filenames) {
  let result = {}
  for (const filename of filenames) {
    const featuresFilename = filename + '.d/poses.json'
    const keyframesFilename = filename + '.keyframes'
    
    result = {...result, ...(await stitch(featuresFilename, keyframesFilename))}
  }

  console.log(JSON.stringify(result))
}

main(process.argv.slice(2))
