export const SWELL_FACTOR = 1.3;
export const DENSITY_COAL_BCM = 2.2;
export const DENSITY_COAL_LCM = 1.69;

export const stdOperationalLoader = [
  {
    loaderClass: "PC200",
    bucketCap: 1,
    fillFactorOB: 0.85,
    cycleTimeOB: 14,
    jobEfficiencyOB: 0.85,
    fillFactorCoal: 0.75,
    cycleTimeCoal: 22,
    jobEfficiencyCoal: 0.75,
  },
  {
    loaderClass: "PC300",
    bucketCap: 1.8,
    fillFactorOB: 0.85,
    cycleTimeOB: 20,
    jobEfficiencyOB: 0.85,
    fillFactorCoal: 0.75,
    cycleTimeCoal: 23,
    jobEfficiencyCoal: 0.75,
  },
  {
    loaderClass: "PC400",
    bucketCap: 3.2,
    fillFactorOB: 0.85,
    cycleTimeOB: 22,
    jobEfficiencyOB: 0.83,
    fillFactorCoal: 0.75,
    cycleTimeCoal: 28,
    jobEfficiencyCoal: 0.75,
  },
  {
    loaderClass: "EX1200",
    bucketCap: 7.1,
    fillFactorOB: 0.92,
    cycleTimeOB: 23,
    jobEfficiencyOB: 0.9,
    fillFactorCoal: 0.75,
    cycleTimeCoal: 25,
    jobEfficiencyCoal: 0.75,
  },
  {
    loaderClass: "PC1250",
    bucketCap: 7.5,
    fillFactorOB: 0.87,
    cycleTimeOB: 23,
    jobEfficiencyOB: 0.9,
    fillFactorCoal: 0.75,
    cycleTimeCoal: 25,
    jobEfficiencyCoal: 0.75,
  },
  {
    loaderClass: "EX1900",
    bucketCap: 11.6,
    fillFactorOB: 0.85,
    cycleTimeOB: 32,
    jobEfficiencyOB: 0.85,
    fillFactorCoal: 0.75,
    cycleTimeCoal: 22,
    jobEfficiencyCoal: 0.75,
  },
  {
    loaderClass: "EC950",
    bucketCap: 6,
    fillFactorOB: 0.85,
    cycleTimeOB: 24,
    jobEfficiencyOB: 0.85,
    fillFactorCoal: 0.75,
    cycleTimeCoal: 25,
    jobEfficiencyCoal: 0.75,
  },
  {
    loaderClass: "DX1000",
    bucketCap: 6.8,
    fillFactorOB: 0.85,
    cycleTimeOB: 24,
    jobEfficiencyOB: 0.85,
    fillFactorCoal: 0.75,
    cycleTimeCoal: 22,
    jobEfficiencyCoal: 0.75,
  },
  {
    loaderClass: "CAT395",
    bucketCap: 7,
    fillFactorOB: 0.85,
    cycleTimeOB: 25,
    jobEfficiencyOB: 0.88,
    fillFactorCoal: 0.75,
    cycleTimeCoal: 22,
    jobEfficiencyCoal: 0.75,
  },
  {
    loaderClass: "EC480",
    bucketCap: 2.7,
    fillFactorOB: 0.85,
    cycleTimeOB: 24,
    jobEfficiencyOB: 0.9,
    fillFactorCoal: 0.75,
    cycleTimeCoal: 26,
    jobEfficiencyCoal: 0.7,
  },
  {
    loaderClass: "DX800",
    bucketCap: 5.58,
    fillFactorOB: 0.93,
    cycleTimeOB: 22,
    jobEfficiencyOB: 0.85,
    fillFactorCoal: 0.75,
    cycleTimeCoal: 22,
    jobEfficiencyCoal: 0.7,
  },
  {
    loaderClass: "SY500",
    bucketCap: 2.7,
    fillFactorOB: 0.85,
    cycleTimeOB: 22,
    jobEfficiencyOB: 0.85,
    fillFactorCoal: 0.7,
    cycleTimeCoal: 25,
    jobEfficiencyCoal: 0.7,
  },
  {
    loaderClass: "EC210",
    bucketCap: 1,
    fillFactorOB: 0.85,
    cycleTimeOB: 14,
    jobEfficiencyOB: 0.85,
    fillFactorCoal: 0.75,
    cycleTimeCoal: 22,
    jobEfficiencyCoal: 0.75,
  },
  {
    loaderClass: "S500-LC",
    bucketCap: 3.2,
    fillFactorOB: 0.85,
    cycleTimeOB: 22,
    jobEfficiencyOB: 0.83,
    fillFactorCoal: 0.75,
    cycleTimeCoal: 22,
    jobEfficiencyCoal: 0.75,
  },
];

export const stdOperationalHauler = [
  {
    haulerClass: "HD785",
    vesselCap: 40,
    speedEmpty: 23,
    speedLoad: 23,
    spottingTimeFront: 1.25,
    spottingTimeDumping: 0.7,
    dumpingTime: 0.25,
    jobEfficiency: 0.9,
    speedFactor: 1,
  },
  {
    haulerClass: "OHT777",
    vesselCap: 40,
    speedEmpty: 23,
    speedLoad: 23,
    spottingTimeFront: 1.25,
    spottingTimeDumping: 0.7,
    dumpingTime: 0.25,
    jobEfficiency: 0.9,
    speedFactor: 1,
  },
  {
    haulerClass: "TR100",
    vesselCap: 36,
    speedEmpty: 23,
    speedLoad: 23,
    spottingTimeFront: 1.25,
    spottingTimeDumping: 0.7,
    dumpingTime: 0.25,
    jobEfficiency: 0.9,
    speedFactor: 1,
  },
];
