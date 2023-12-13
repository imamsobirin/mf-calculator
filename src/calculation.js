export const getBucketCapLcm = (ff, cap) => {
  return ff * cap;
};
export const getBucketCapBcm = (ff, cap, sf) => {
  return (ff * cap) / sf;
};
export const getBucketCapTon = (ff, cap, sf, den) => {
  return (cap * ff * den) / sf;
};
export const getProdtyLoader = (cap, ct, eff) => {
  return cap * eff * (3600 / ct);
};
export const getNumberOfPass = (vesselCap, bucketCap) => {
  return Math.round(vesselCap / bucketCap);
};

export const getLoadingTime = (ctLoader, numberOfPass) => {
  return (ctLoader * numberOfPass) / 60;
};

export const getHaulingTime = (speed, distance, speedFactor) => {
  return (distance / 1000 / (speed * speedFactor)) * 60;
};

export const getCycleTimeHauling = (
  loadingTime,
  haulingLoadedTime,
  spottingTimeDisposal,
  dumpingTime,
  haulingEmptyTime,
  spottingTimeFront
) => {
  return (
    loadingTime +
    haulingEmptyTime +
    spottingTimeDisposal +
    dumpingTime +
    haulingLoadedTime +
    spottingTimeFront
  );
};

export const getProdtyHauler = (vesselCap, ct, jobEff) => {
  return (jobEff * vesselCap) / (ct / 60);
};

export const getTruckQuantity = (loaderProdty, haulerProdty) => {
  return Math.round(loaderProdty / haulerProdty);
};
