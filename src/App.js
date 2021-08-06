import { useEffect, useState } from 'react';

const CAP = 100;
const SSR_RATE = 4;

function App() {
  const [roll, setRoll] = useState(null);
  const [outcome, setOutcome] = useState(null);

  const numberGenerator = function() {
    let n = Math.ceil(Math.random() * CAP);

    return n;
  };

  const isRollSSR = function() {
    let ssrRolls = [];

    while(ssrRolls.length < 4) {
      for(let i = 0; i < SSR_RATE; i++){
        ssrRolls.push(numberGenerator(true));
      };

      ssrRolls = [...new Set(ssrRolls)];

      if(ssrRolls.length !== 4) {
        ssrRolls = [];
      };
    };
    return ssrRolls;
  };


  const rollGachaHandler = () => {
    const r = numberGenerator();
    const isSSR = isRollSSR();

    setRoll(r);
    if(isSSR.includes(roll)) {
      setOutcome("You've rolled an SSR!");
    } else {
      setOutcome("Better luck next time!");
    };
  };

  const debugGacha = () => {
    let debugSSR;
    for(let i = 0; i < 200; i++) {
      debugSSR = isRollSSR();
      if(debugSSR.length !== 4) {
        console.log("bug");
        break;
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
      <button onClick={debugGacha}>Debug Gacha</button>
    </>
  )
}

export default App;
