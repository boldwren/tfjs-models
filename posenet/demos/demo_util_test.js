const {weightedDistanceMatching} = require('./demo_util');

const frameA = [
  {
    score: 0.36523322070099634,
    keypoints: [
      {
        score: 0.9988252520561218,
        part: 'nose',
        position: {
          x: 133.9050357104742,
          y: 84.41624780844526,
        },
      },
      {
        score: 0.9970967769622803,
        part: 'leftEye',
        position: {
          x: 151.4465276260822,
          y: 58.139677075614685,
        },
      },
      {
        score: 0.9933744072914124,
        part: 'rightEye',
        position: {
          x: 114.75673781500922,
          y: 63.9994626853898,
        },
      },
      {
        score: 0.5739574432373047,
        part: 'leftEar',
        position: {
          x: 180.0442115605226,
          y: 55.89727402081962,
        },
      },
      {
        score: 0.222333163022995,
        part: 'rightEar',
        position: {
          x: 79.6665754931712,
          y: 72.84396196666515,
        },
      },
      {
        score: 0.6279566884040833,
        part: 'leftShoulder',
        position: {
          x: 196.0531519170393,
          y: 116.45054064298927,
        },
      },
      {
        score: 0.7442553639411926,
        part: 'rightShoulder',
        position: {
          x: 72.9221208750853,
          y: 140.83089270786928,
        },
      },
      {
        score: 0.0953371450304985,
        part: 'leftElbow',
        position: {
          x: 253.87848859641983,
          y: 207.86769264622734,
        },
      },
      {
        score: 0.34327954053878784,
        part: 'rightElbow',
        position: {
          x: 34.641393583420424,
          y: 237.35145379228197,
        },
      },
      {
        score: 0.11897160857915878,
        part: 'leftWrist',
        position: {
          x: 193.9686914633589,
          y: 200.1214936462759,
        },
      },
      {
        score: 0.15354718267917633,
        part: 'rightWrist',
        position: {
          x: 36.86047161531727,
          y: 238.14226284361717,
        },
      },
      {
        score: 0.24541997909545898,
        part: 'leftHip',
        position: {
          x: 191.0465725681238,
          y: 224.76156664173504,
        },
      },
      {
        score: 0.0744752585887909,
        part: 'rightHip',
        position: {
          x: 50.45473031830369,
          y: 297.32912032924895,
        },
      },
      {
        score: 0.01352184358984232,
        part: 'leftKnee',
        position: {
          x: 202.25529559174475,
          y: 241.97633412846346,
        },
      },
      {
        score: 0.0019542186055332422,
        part: 'rightKnee',
        position: {
          x: 29.04217591759754,
          y: 383.683743393212,
        },
      },
      {
        score: 0.003044961718842387,
        part: 'leftAnkle',
        position: {
          x: 209.17775672778748,
          y: 299.7139669998347,
        },
      },
      {
        score: 0.0016139185754582286,
        part: 'rightAnkle',
        position: {
          x: 36.57138521908319,
          y: 451.8650637732611,
        },
      },
    ],
  },
  {
    score: 0.36221879991867084,
    keypoints: [
      {
        score: 0.9829275012016296,
        part: 'nose',
        position: {
          x: 398.36834020781936,
          y: 89.53933213886461,
        },
      },
      {
        score: 0.9927287101745605,
        part: 'leftEye',
        position: {
          x: 409.6135118551421,
          y: 62.588331992166076,
        },
      },
      {
        score: 0.978751003742218,
        part: 'rightEye',
        position: {
          x: 378.9295243938067,
          y: 81.37213444849203,
        },
      },
      {
        score: 0.7096562385559082,
        part: 'leftEar',
        position: {
          x: 444.52112961930834,
          y: 62.46789909942805,
        },
      },
      {
        score: 0.25516918301582336,
        part: 'rightEar',
        position: {
          x: 360.31635462889193,
          y: 93.84051177933898,
        },
      },
      {
        score: 0.625148594379425,
        part: 'leftShoulder',
        position: {
          x: 481.0770586917275,
          y: 115.87528429533302,
        },
      },
      {
        score: 0.40978381037712097,
        part: 'rightShoulder',
        position: {
          x: 389.5129585823817,
          y: 126.80746519077587,
        },
      },
      {
        score: 0.021180370822548866,
        part: 'leftElbow',
        position: {
          x: 537.7168923093561,
          y: 182.005130477816,
        },
      },
      {
        score: 0.8060680031776428,
        part: 'rightElbow',
        position: {
          x: 340.2985358098794,
          y: 228.93822932103922,
        },
      },
      {
        score: 0.040960799902677536,
        part: 'leftWrist',
        position: {
          x: 487.9820204617684,
          y: 187.50259388259974,
        },
      },
      {
        score: 0.11155348271131516,
        part: 'rightWrist',
        position: {
          x: 415.7835374798691,
          y: 227.9612808896784,
        },
      },
      {
        score: 0.029126334935426712,
        part: 'leftHip',
        position: {
          x: 480.0880052889997,
          y: 220.47020148115547,
        },
      },
      {
        score: 0.11254460364580154,
        part: 'rightHip',
        position: {
          x: 392.90120911877057,
          y: 261.20264279214956,
        },
      },
      {
        score: 0.023178856819868088,
        part: 'leftKnee',
        position: {
          x: 490.1293492456625,
          y: 265.7190824809827,
        },
      },
      {
        score: 0.0436401292681694,
        part: 'rightKnee',
        position: {
          x: 391.4944381044622,
          y: 295.81019111544066,
        },
      },
      {
        score: 0.004850281868129969,
        part: 'leftAnkle',
        position: {
          x: 486.942524310441,
          y: 338.6915980723866,
        },
      },
      {
        score: 0.010451694019138813,
        part: 'rightAnkle',
        position: {
          x: 392.70848588288175,
          y: 351.08230155810975,
        },
      },
    ],
  },
];

// sorted with the leftmost x values on the first.
const frameB = [
  {
    score: 0.4510232782203649,
    keypoints: [
      {
        score: 0.9951071739196777,
        part: 'nose',
        position: {
          x: 155.09284225820798,
          y: 76.77165388363844,
        },
      },
      {
        score: 0.9858126044273376,
        part: 'leftEye',
        position: {
          x: 175.63511753639978,
          y: 66.72561935514037,
        },
      },
      {
        score: 0.9979656934738159,
        part: 'rightEye',
        position: {
          x: 140.17125068352235,
          y: 50.857365479943326,
        },
      },
      {
        score: 0.10097669064998627,
        part: 'leftEar',
        position: {
          x: 181.9338647942794,
          y: 68.54819080285858,
        },
      },
      {
        score: 0.6136600971221924,
        part: 'rightEar',
        position: {
          x: 100.09568922700937,
          y: 55.05264425835412,
        },
      },
      {
        score: 0.8593009114265442,
        part: 'leftShoulder',
        position: {
          x: 179.92565311186493,
          y: 112.41014045581483,
        },
      },
      {
        score: 0.8023437261581421,
        part: 'rightShoulder',
        position: {
          x: 69.66169201142607,
          y: 136.7721830892284,
        },
      },
      {
        score: 0.05595208704471588,
        part: 'leftElbow',
        position: {
          x: 232.46781310142828,
          y: 167.26854698002683,
        },
      },
      {
        score: 0.845441460609436,
        part: 'rightElbow',
        position: {
          x: 33.22675799765782,
          y: 223.11487616154182,
        },
      },
      {
        score: 0.8687220811843872,
        part: 'leftWrist',
        position: {
          x: 186.18554678576731,
          y: 152.56717107449356,
        },
      },
      {
        score: 0.4419577717781067,
        part: 'rightWrist',
        position: {
          x: 120.64725641618695,
          y: 224.68749281258607,
        },
      },
      {
        score: 0.020731868222355843,
        part: 'leftHip',
        position: {
          x: 188.87561636361463,
          y: 254.55785940962227,
        },
      },
      {
        score: 0.05223948135972023,
        part: 'rightHip',
        position: {
          x: 67.96081275270696,
          y: 325.8139325861345,
        },
      },
      {
        score: 0.016975553706288338,
        part: 'leftKnee',
        position: {
          x: 232.94217628345154,
          y: 276.583875410738,
        },
      },
      {
        score: 0.0005974545492790639,
        part: 'rightKnee',
        position: {
          x: 56.13687289388556,
          y: 392.2348513240703,
        },
      },
      {
        score: 0.00734084565192461,
        part: 'leftAnkle',
        position: {
          x: 244.91496532284026,
          y: 338.62953046609084,
        },
      },
      {
        score: 0.002270228462293744,
        part: 'rightAnkle',
        position: {
          x: 74.68700055141895,
          y: 448.7499112099931,
        },
      },
    ],
  },
  {
    score: 0.47078232217908783,
    keypoints: [
      {
        score: 0.9992903470993042,
        part: 'nose',
        position: {
          x: 413.36371773167656,
          y: 77.66702105427345,
        },
      },
      {
        score: 0.9973857998847961,
        part: 'leftEye',
        position: {
          x: 432.1553364134671,
          y: 65.27140042935198,
        },
      },
      {
        score: 0.999209463596344,
        part: 'rightEye',
        position: {
          x: 396.4311647136309,
          y: 60.64338237918608,
        },
      },
      {
        score: 0.5883772969245911,
        part: 'leftEar',
        position: {
          x: 449.06619443879487,
          y: 74.09098057719001,
        },
      },
      {
        score: 0.642571210861206,
        part: 'rightEar',
        position: {
          x: 369.3308183324267,
          y: 68.19470333077055,
        },
      },
      {
        score: 0.9316436648368835,
        part: 'leftShoulder',
        position: {
          x: 463.30432975501344,
          y: 116.32586138987398,
        },
      },
      {
        score: 0.9445587396621704,
        part: 'rightShoulder',
        position: {
          x: 364.42928314208984,
          y: 127.83191970914424,
        },
      },
      {
        score: 0.09645222872495651,
        part: 'leftElbow',
        position: {
          x: 514.2694356148703,
          y: 150.6119654192562,
        },
      },
      {
        score: 0.8113641142845154,
        part: 'rightElbow',
        position: {
          x: 346.17695836295854,
          y: 211.69257693820526,
        },
      },
      {
        score: 0.3671628534793854,
        part: 'leftWrist',
        position: {
          x: 485.4576021607159,
          y: 151.39060884888409,
        },
      },
      {
        score: 0.2943183183670044,
        part: 'rightWrist',
        position: {
          x: 414.602281893903,
          y: 224.0005841380671,
        },
      },
      {
        score: 0.2118067443370819,
        part: 'leftHip',
        position: {
          x: 460.422854953342,
          y: 215.63951983089333,
        },
      },
      {
        score: 0.05788682773709297,
        part: 'rightHip',
        position: {
          x: 384.166773857429,
          y: 265.01348450867056,
        },
      },
      {
        score: 0.02486398257315159,
        part: 'leftKnee',
        position: {
          x: 486.5122513725743,
          y: 243.81643477936234,
        },
      },
      {
        score: 0.02728971280157566,
        part: 'rightKnee',
        position: {
          x: 396.65143894173247,
          y: 298.2711453186838,
        },
      },
      {
        score: 0.0037655653432011604,
        part: 'leftAnkle',
        position: {
          x: 510.6616706178899,
          y: 295.27396235549656,
        },
      },
      {
        score: 0.0053526065312325954,
        part: 'rightAnkle',
        position: {
          x: 410.55009100172254,
          y: 355.0796806115156,
        },
      },
    ],
  },
];

// TODO: This is horribly inefficient. There has to be a better way to do this
function fillMissing(keypoints) {
  const indexed = {};
  for (const point of keypoints) {
    indexed[point.part] = point;
  }

  return partNames.map(
    (part) =>
      indexed[part] || {
        score: 0,
        part: part,
        position: {x: 0, y: 0},
      },
  );
}

describe('weightedDistanceMatching', () => {
  it('doesnt crash', () => {
    expect(
      weightedDistanceMatching(
        fillMissing(frameA[0].keypoints),
        fillMissing(frameB[0].keypoints),
      ),
    ).toBeGreaterThan(0);
  });
  it('thinks that the A.left pose is closer to B.left than B.right', () => {
    expect(
      weightedDistanceMatching(
        fillMissing(frameA[0].keypoints),
        fillMissing(frameB[1].keypoints),
      ),
    ).toBeGreaterThan(
      weightedDistanceMatching(
        fillMissing(frameA[0].keypoints),
        fillMissing(frameB[0].keypoints),
      ),
    );
  });
  it('is symmetrical', () => {
    expect(
      weightedDistanceMatching(
        fillMissing(frameA[0].keypoints),
        fillMissing(frameB[0].keypoints),
      ),
    ).toEqual(
      weightedDistanceMatching(
        fillMissing(frameB[0].keypoints),
        fillMissing(frameA[0].keypoints),
      ),
    );
  });
});
