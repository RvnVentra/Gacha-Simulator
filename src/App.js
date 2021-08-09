import { useState } from 'react';

const GACHA_POOL_SIZE = 100;
const GACHA_POOL = [];
const SSR_RATE = 4;
const SR_RATE = 36;

function PopulateGachaPool() {
    //Populate the total size of rolls/pulls
    for(let i = 0; i < GACHA_POOL_SIZE; i++) {
      GACHA_POOL.push(i + 1);
    };
};

PopulateGachaPool();

function App() {
  const [roll, setRoll] = useState(null);
  const [ssrPool, setSSRPool] = useState([]);
  const [outcome, setOutcome] = useState(null);

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


  const rollGachaHandler = () => {
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

  const debugRolls = () => {
    for(let i = 0; i < 200; i++) {
      const debugSSR = isRollSSR(GACHA_POOL);
      const _debugSSR = [...new Set(debugSSR)];
      
      if(_debugSSR.length !== 4) {
        console.log("bug");
        break;
      };
    };
  };

  const debugGacha = function() {
    for(let i = 0; i < 100; i++) {
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
      <h1>Gacha simulator</h1>
      <div>
        {roll}
        {outcome}
      </div>
      <button onClick={rollGachaHandler}>Click to Roll</button>
      <button onClick={debugRolls}>Debug Rolls</button>
      <button onClick={debugGacha}>Debug Gacha</button>
    </>
  );
};

export default App;
