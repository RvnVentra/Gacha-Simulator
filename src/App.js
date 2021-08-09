import { useState } from 'react';

const GACHA_POOL_SIZE = 100;
const GACHA_POOL = [];
const SSR_RATE = 4;

function PopulateGachaPool() {
    //Populate the total size of rolls/pulls
    for(let i = 0; i < GACHA_POOL_SIZE; i++) {
      GACHA_POOL.push(i + 1);
    };
};

PopulateGachaPool();

function App() {
  const [roll, setRoll] = useState(null);
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

    return isSSR;
  };


  const rollGachaHandler = () => {
    const r = numberGenerator(GACHA_POOL_SIZE);
    const ssrPool = isRollSSR(GACHA_POOL);

    setRoll(r);
    if(ssrPool.includes(r)) {
      alert("You've rolled an SSR!");
      setOutcome("You've rolled an SSR!");
    } else {
      setOutcome("Better luck next time!");
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
      const ssrPool = isRollSSR(GACHA_POOL);
  
      setRoll(r);
      if(ssrPool.includes(r)) {
        alert("You've rolled an SSR!");
        setOutcome("You've rolled an SSR!");
      } else {
        setOutcome("Better luck next time!");
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
  )
}

export default App;
