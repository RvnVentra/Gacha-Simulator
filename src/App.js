import { useState } from 'react';


import Header from './components/Header/header';
import GachaInfo from './components/Content/GachaInfo/gachaInfo';
import GachaInteraction from './components/Content/GachaInteraction/gachaInteraction';

const GACHA_INFO = {
  GACHA_POOL_SIZE: 100,
  GACHA_POOL: [],
  SSR_RATE: 4,
  SR_RATE: 36,
  DEBUG_ROLLS_COUNT: 100
};

const {
  GACHA_POOL_SIZE,
  GACHA_POOL,
  SSR_RATE,
  SR_RATE,
  DEBUG_ROLLS_COUNT
} = GACHA_INFO;

function PopulateGachaPool() {
    //Populate the total size of rolls/pulls
    for(let i = 0; i < GACHA_POOL_SIZE; i++) {
      GACHA_POOL.push(i + 1);
    };
};

PopulateGachaPool();

function App() {
  const [roll, setRoll] = useState(null);
  const [totalRolls, setTotalRolls] = useState(0);
  const [totalCategorizedRolls, setTotalCategorizedRolls] = useState({
    totalSSR: 0,
    totalSR: 0,
    totalR: 0,
  });
  const [outcome, setOutcome] = useState(null);

  //Fill an array with the four numbers representing SSR pulls
  const [ssrPool, setSSRPool] = useState([]);

  const numberGenerator = function(poolSize) {
    let n = Math.ceil(Math.random() * poolSize);

    return n;
  };

  const isRollSSR = function(gacha_pool) {
    const isSSR = [], _gacha_pool = [...gacha_pool];

    //Randomly pull four numbers out of the array to fill the SSR Pool
    for(let i = 0; i < SSR_RATE; i++){
      isSSR.push(parseInt(_gacha_pool.splice(numberGenerator(_gacha_pool.length) - 1, 1)));
    };

    setSSRPool(isSSR);

    return isSSR;
  };

  const isRollSR = function(gacha_pool) {
    const isSR = [], _gacha_pool = [...gacha_pool];

    //Remove SSR Pool from generatable numbers
    for(let i = 0; i < SSR_RATE; i++) {
      _gacha_pool.splice(ssrPool[i] - 1, 1);
    };

    for(let i = 0; i < SR_RATE; i++) {
      isSR.push(parseInt(_gacha_pool.splice(numberGenerator(_gacha_pool.length) - 1, 1)));
    };

    return isSR;
  };


  const rollSingleGachaHandler = () => {
    const r = numberGenerator(GACHA_POOL_SIZE);
    const _ssrPool = isRollSSR(GACHA_POOL);
    const _srPool = isRollSR(GACHA_POOL);

    setRoll(r);
    setTotalRolls(totalRolls + 1);

    if(_ssrPool.includes(r)) {
      alert("You've rolled an SSR!");
      setTotalCategorizedRolls({
        ...totalCategorizedRolls,
        totalSSR: totalCategorizedRolls.totalSSR + 1,
      });
      setOutcome("You've rolled a SSR!");
    } else if (_srPool.includes(r)) {
      setTotalCategorizedRolls({
        ...totalCategorizedRolls,
        totalSR: totalCategorizedRolls.totalSR + 1,
      });
      setOutcome("You've rolled a SR!");
    } else {
      setTotalCategorizedRolls({
        ...totalCategorizedRolls,
        totalR: totalCategorizedRolls.totalR + 1,
      });
      setOutcome("You've rolled a R!");
    };
  };

  const debugRolls = () => {
    for(let i = 0; i < DEBUG_ROLLS_COUNT; i++) {
      const debugSSR = isRollSSR(GACHA_POOL);
      const _debugSSR = [...new Set(debugSSR)];
      const debugSR = isRollSR(GACHA_POOL);
      const _debugSR = [...new Set(debugSR)];
      
      if(_debugSSR.length !== SSR_RATE) {
        console.log("SSR pool is incorrect");
        break;
      };
      if(_debugSR.length !== SR_RATE) {
        console.log("SR pool is incorrect");
        break;
      };
    };
  };

  const debugGacha = function() {
    for(let i = 0; i < DEBUG_ROLLS_COUNT; i++) {
      const r = numberGenerator(GACHA_POOL_SIZE);
      const _ssrPool = isRollSSR(GACHA_POOL);
      const _srPool = isRollSR(GACHA_POOL);
  
      setRoll(r);
      if(_ssrPool.includes(r)) {
        alert("You've rolled an SSR!");
        setOutcome("You've rolled a SSR!");
      } else if (_srPool.includes(r)) {
        setOutcome("You've rolled a SR!");
      } else {
        setOutcome("You've rolled a R!");
      };
    };
  };

  return (
    <>
      <Header />

      <GachaInfo
        roll={roll}
        totalRolls={totalRolls}
        totalCategorizedRolls={totalCategorizedRolls}
        outcome={outcome}
      />

      <GachaInteraction
        rollSingleGacha={rollSingleGachaHandler}
        debugRolls={debugRolls}
        debugGacha={debugGacha}
      />
    </>
  );
};

export default App;
