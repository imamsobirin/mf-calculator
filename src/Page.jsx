import { useEffect, useState } from "react";
import "./style.css";
import {
  stdOperationalHauler,
  stdOperationalLoader,
  SWELL_FACTOR,
} from "./dataConfig";

import {
  getBucketCapBcm,
  getNumberOfPass,
  getLoadingTime,
  getHaulingTime,
  getCycleTimeHauling,
  getProdtyHauler,
  getProdtyLoader,
} from "./calculation";

function Page() {
  const [haulerQuantity, setHaulerQuantity] = useState(0);
  const [prodtyLoaderOut, setProdtyLoaderOut] = useState(0);
  const [prodtyHaulerOut, setProdtyHaulerOut] = useState(0);
  const [input, setInput] = useState({
    haulerClass: "HD785",
    loaderClass: "PC1250",
    distance: 2000,
    material: "OB",
  });
  const [hauler, setHauler] = useState([]);
  const [loader, setLoader] = useState([]);

  // Input row-1 handler
  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  // Input row-2 handler (Loader)
  const loaderHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setLoader({ ...loader, [name]: value });
  };
  // Input row-3 handler (hauler)
  const haulerHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setHauler({ ...hauler, [name]: value });
  };
  // Function get prodty loader
  const calcProdtyLoader = (dataLoader) => {
    let cap = getBucketCapBcm(
      dataLoader.fillFactorOB,
      dataLoader.bucketCap,
      SWELL_FACTOR
    );
    let ct = dataLoader.cycleTimeOB;
    let eff = dataLoader.jobEfficiencyOB;
    let prodtyLoader = getProdtyLoader(cap, ct, eff);

    return Math.round(prodtyLoader);
  };

  // function get prodty hauler
  const calcProdtyHauler = (dataHauler, dataLoader) => {
    let vesselCap = dataHauler.vesselCap;
    let jobEff = dataHauler.jobEfficiency;

    let bucketCap = getBucketCapBcm(
      dataLoader.fillFactorOB,
      dataLoader.bucketCap,
      SWELL_FACTOR
    );
    let numberOfPass = getNumberOfPass(vesselCap, bucketCap);
    let loadingTime = getLoadingTime(dataLoader.cycleTimeOB, numberOfPass);
    let emptyHaulingTime = getHaulingTime(
      dataHauler.speedEmpty,
      input.distance,
      dataHauler.speedFactor
    );
    let loadedHaulingTime = getHaulingTime(
      dataHauler.speedLoad,
      input.distance,
      dataHauler.speedFactor
    );

    let ct = getCycleTimeHauling(
      loadingTime,
      loadedHaulingTime,
      dataHauler.spottingTimeDumping,
      dataHauler.dumpingTime,
      emptyHaulingTime,
      dataHauler.spottingTimeFront
    );

    return Math.round(getProdtyHauler(vesselCap, ct, jobEff));
  };

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    setProdtyLoaderOut(calcProdtyLoader(loader));
    setProdtyHaulerOut(calcProdtyHauler(hauler, loader));
    setHaulerQuantity(
      Math.round(calcProdtyLoader(loader) / calcProdtyHauler(hauler, loader))
    );
  };

  useEffect(() => {
    const paramHauler = stdOperationalHauler.find(
      (item) => item.haulerClass == input.haulerClass
    );
    const paramLoader = stdOperationalLoader.find(
      (item) => item.loaderClass == input.loaderClass
    );
    setHauler(paramHauler);
    setLoader(paramLoader);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input.loaderClass, input.haulerClass, input.material]);

  useEffect(() => {
    setProdtyLoaderOut(calcProdtyLoader(loader));
    setProdtyHaulerOut(calcProdtyHauler(hauler, loader));
    let calcQuantity = Math.round(
      calcProdtyLoader(loader) / calcProdtyHauler(hauler, loader)
    );
    setHaulerQuantity(calcQuantity);
    // console.log(haulerQuantity);
  }, [loader, hauler, input]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">
        Matching Fleet Calculator
      </h1>
      <main>
        <form onSubmit={submitHandler}>
          <div className="form-input-loader flex flex-col">
            {/* First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4 bg-brown-white border-b p-2 items-center">
              <div className=" flex justify-between px-2 items-center border-l border-blue-primary sm:border-none">
                <label className="font-bold" htmlFor="loaderClass">
                  Loader Type
                </label>
                <select
                  className="border border-blue-secondary w-1/2 p-1 "
                  name="loaderClass"
                  id="loaderClass"
                  value={input.loaderClass || ""}
                  onChange={inputHandler}
                >
                  <option value="PC1250">PC1250</option>
                  <option value="EX1200">EX1200</option>
                  <option value="CAT395">CAT395</option>
                  <option value="DX800">DX800</option>
                  <option value="EC480">EC480</option>
                  <option value="PC400">PC400</option>
                  <option value="PC200">PC200</option>
                </select>
              </div>
              <div className=" flex justify-between px-2 items-center border-l border-blue-primary">
                <label className="font-bold" htmlFor="haulerClass">
                  Hauler Type
                </label>
                <select
                  className="border border-blue-secondary w-1/2 p-1 "
                  name="haulerClass"
                  id="haulerClass"
                  value={input.haulerClass || ""}
                  onChange={inputHandler}
                >
                  <option value="HD785">HD785</option>
                  <option value="OHT777">OHT777</option>
                  <option value="TR100">TR100</option>
                </select>
              </div>
              <div className=" flex justify-between px-2 items-center border-l border-blue-primary">
                <label className="font-bold" htmlFor="material">
                  Material
                </label>
                <select
                  className="border border-blue-secondary w-1/2 p-1 "
                  name="material"
                  id="material"
                  value={input.material || ""}
                  onChange={inputHandler}
                  disabled
                >
                  <option value="OB">OB</option>
                  <option value="coal">Coal</option>
                </select>
              </div>

              <div className=" flex justify-between px-2 items-center border-l border-blue-primary ">
                <label className="font-bold" htmlFor="distance">
                  <span>Distance [m]</span>
                </label>
                <input
                  className="border border-blue-secondary p-1 w-1/2"
                  type="number"
                  id="distance"
                  name="distance"
                  value={input.distance}
                  onChange={inputHandler}
                />
              </div>
            </div>
            {/* Second Row - Loader */}
            <div className="second-row p-2 mb-4">
              <p className="font-bold text-center text-xl mb-3">
                Loader Parameter
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                <label className="flex flex-col px-1" htmlFor="bucketCap">
                  <span>Bucket Capacity [LCM]</span>
                  <input
                    className="border border-blue-secondary p-1"
                    id="bucketCap"
                    name="bucketCap"
                    type="number"
                    value={loader.bucketCap}
                    onChange={loaderHandler}
                  />
                </label>
                <label className="flex flex-col px-1" htmlFor="fillFactorOB">
                  <span>Bucket Fill Factor</span>
                  <input
                    className="border border-blue-secondary p-1"
                    id="fillFactorOB"
                    name="fillFactorOB"
                    type="number"
                    value={loader.fillFactorOB}
                    onChange={loaderHandler}
                  />
                </label>

                <label htmlFor="cycleTimeOB" className="flex flex-col px-1">
                  <span>Loader Cycle Time [s]</span>
                  <input
                    className="border border-blue-secondary p-1"
                    id="cycleTimeOB"
                    name="cycleTimeOB"
                    type="number"
                    value={loader.cycleTimeOB}
                    onChange={loaderHandler}
                  />
                </label>

                <label htmlFor="jobEfficiencyOB" className="flex flex-col px-1">
                  <span>Job Efficiency</span>
                  <input
                    className="border border-blue-secondary p-1"
                    id="jobEfficiencyOB"
                    name="jobEfficiencyOB"
                    type="number"
                    value={loader.jobEfficiencyOB}
                    onChange={loaderHandler}
                  />
                </label>
              </div>
            </div>
            {/* Third Row - Hauler */}
            <div className="third-row p-2 mb-4">
              <p className="font-bold text-xl mb-3 text-center">
                Hauler Parameter
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4 ">
                <label className="flex flex-col px-1" htmlFor="vesselCap">
                  <span>Vessel Capacity [BCM]</span>
                  <input
                    className="border border-blue-secondary p-1"
                    id="vesselCap"
                    name="vesselCap"
                    type="number"
                    onChange={haulerHandler}
                    value={hauler.vesselCap}
                  />
                </label>

                <label htmlFor="speedEmpty" className="flex flex-col px-1">
                  <span>Empty Speed [km/h]</span>
                  <input
                    className="border border-blue-secondary p-1"
                    id="speedEmpty"
                    name="speedEmpty"
                    type="number"
                    onChange={haulerHandler}
                    value={hauler.speedEmpty}
                  />
                </label>

                <label htmlFor="speedLoad" className="flex flex-col px-1">
                  <span>Loaded Speed [km/h]</span>
                  <input
                    className="border border-blue-secondary p-1"
                    id="speedLoad"
                    name="speedLoad"
                    type="number"
                    onChange={haulerHandler}
                    value={hauler.speedLoad}
                  />
                </label>
                <label
                  htmlFor="spottingTimeFront"
                  className="flex flex-col px-1"
                >
                  <span>Spotting Time Front [m]</span>
                  <input
                    className="border border-blue-secondary p-1"
                    id="spottingTimeFront"
                    name="spottingTimeFront"
                    type="number"
                    onChange={haulerHandler}
                    value={hauler.spottingTimeFront}
                  />
                </label>
                <label
                  htmlFor="spottingTimeDumping"
                  className="flex flex-col px-1"
                >
                  <span>Spotting Time Dump. [m]</span>
                  <input
                    className="border border-blue-secondary p-1"
                    id="spottingTimeDumping"
                    name="spottingTimeDumping"
                    type="number"
                    onChange={haulerHandler}
                    value={hauler.spottingTimeDumping}
                  />
                </label>
                <label htmlFor="dumpingTime" className="flex flex-col px-1">
                  <span>Dumping Time [m]</span>
                  <input
                    className="border border-blue-secondary p-1"
                    id="dumpingTime"
                    name="dumpingTime"
                    type="number"
                    onChange={haulerHandler}
                    value={hauler.dumpingTime}
                  />
                </label>
                <label htmlFor="speedFactor" className="flex flex-col px-1">
                  <span>Speed Factor</span>
                  <input
                    className="border border-blue-secondary p-1"
                    id="speedFactor"
                    name="speedFactor"
                    type="number"
                    onChange={haulerHandler}
                    value={hauler.speedFactor}
                  />
                </label>
              </div>
            </div>
            {/* Fourth Row */}
            <div className="fourth-row grid grid-cols-1 sm:grid-cols-3 p-2 mb-4">
              <div className="flex justify-between w-full p-3">
                <div>
                  <p className="font-bold text-md sm:text-xl">
                    Productivity Loader
                  </p>
                  <p className="text-center text-2xl sm:text-3xl">{`${prodtyLoaderOut} BCM/h`}</p>
                </div>
                <div>
                  <p className="font-bold text-md sm:text-xl">
                    Productivity Hauler
                  </p>
                  <p className="text-center text-2xl sm:text-3xl">{`${prodtyHaulerOut} BCM/h`}</p>
                </div>
              </div>
              <div className="text-center">
                <p className="font-bold text-xl mb-3">Hauler Quantity</p>
                <p className="font-bold text-6xl">
                  {haulerQuantity.toString() == "NaN"
                    ? "-"
                    : haulerQuantity.toString() == "Infinity"
                    ? "-"
                    : haulerQuantity.toString()}
                </p>
              </div>
              <div>
                <p className="font-bold">Notes:</p>
                <p>{`Swell Factor: ${SWELL_FACTOR}`}</p>
                <p className="font-bold">MF Actual:</p>
                <p>
                  {(
                    haulerQuantity /
                    (calcProdtyLoader(loader) /
                      calcProdtyHauler(hauler, loader))
                  ).toFixed(2)}
                </p>
              </div>
            </div>

            {/* Fifth Row */}
            <div className="fift-row p-2">
              <input
                className="py-2 px-6 text-md rounded-lg border border-blue-primary bg-blue-primary text-white-text hover:bg-white-text hover:text-blue-primary cursor-pointer font-bold"
                type="submit"
                value={"Calculate"}
              />
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Page;
