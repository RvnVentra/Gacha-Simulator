import { useState } from 'react';
import styled from 'styled-components';

import GachaInfo from './GachaInfo/gachaInfo';
import GachaResults from './GachaResults/gachaResults';
import SsToString from '../../Common/SessionStorage/convertToString';

const GACHA_INFO = {
  GACHA_POOL_SIZE: 100,
  GACHA_POOL: [],
  SSR_RATE: 4,
  SR_RATE: 36,
  GACHA_RESULTS: [],
};

const {
  GACHA_POOL_SIZE,
  GACHA_POOL,
  SSR_RATE,
  SR_RATE,
  GACHA_RESULTS
} = GACHA_INFO;

function PopulateGachaPool() {
    //Populate the total size of rolls/pulls
    for(let i = 0; i < GACHA_POOL_SIZE; i++) {
      GACHA_POOL.push(i + 1);
    };
};

PopulateGachaPool();

export default function Gacha() {
    const [roll, setRoll] = useState(null);
    const [totalRolls, setTotalRolls] = useState(0);
    const [totalCategorizedRolls, setTotalCategorizedRolls] = useState({
        totalSSR: 0,
        totalSR: 0,
        totalR: 0,
    });
    const [outcome, setOutcome] = useState(null);
    const [rollInfo, setRollInfo] = useState(null);

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

    const GetRollInfoFromItems = () => {
        let input = JSON.parse(sessionStorage.getItem("Items"));
        let _rollInfo = SsToString((input));

        if(input?.length > 0) {
            setRollInfo(_rollInfo);
            setRoll(null);
            setTotalRolls(0);
            setTotalCategorizedRolls({
                totalSSR: 0,
                totalSR: 0,
                totalR: 0,
            });
            GACHA_RESULTS.length = 0;
            setOutcome(null);
        };
    };

    const rollSingleGachaHandler = () => {
        const r = numberGenerator(GACHA_POOL_SIZE);
        const _ssrPool = isRollSSR(GACHA_POOL);
        const _srPool = isRollSR(GACHA_POOL);

        setRoll(r);
        setTotalRolls(totalRolls + 1);

        if(_ssrPool.includes(r)) {
            setTotalCategorizedRolls({
                ...totalCategorizedRolls,
                totalSSR: totalCategorizedRolls.totalSSR + 1,
            });
            setOutcome("You've rolled a SSR!");
            GACHA_RESULTS.push({result: r, rarity: "SSR"});
        } else if (_srPool.includes(r)) {
            setTotalCategorizedRolls({
                ...totalCategorizedRolls,
                totalSR: totalCategorizedRolls.totalSR + 1,
            });
            setOutcome("You've rolled a SR!");
            GACHA_RESULTS.push({result: r, rarity: "SR"});
        } else {
            setTotalCategorizedRolls({
                ...totalCategorizedRolls,
                totalR: totalCategorizedRolls.totalR + 1,
            });
            setOutcome("You've rolled a R!");
            GACHA_RESULTS.push({result: r, rarity: "R"});
        };
    };

    const rollTenfoldGachaHandler = () => {
        const r = [];
        const _ssrPool = isRollSSR(GACHA_POOL);
        const _srPool = isRollSR(GACHA_POOL);
        const _totalCategorizedRolls = { ...totalCategorizedRolls };
        const rollResults = []; //Used to record the highest tier roll the user has rolled

        setRoll(r);
        setTotalRolls(totalRolls + 10);

        for(let i = 0; i < 10; i++) {
            r.push(numberGenerator(GACHA_POOL_SIZE));

            if(_ssrPool.includes(r[i])) {
                _totalCategorizedRolls.totalSSR = _totalCategorizedRolls.totalSSR + 1;
                rollResults.push("SSR");
                GACHA_RESULTS.push({result: r[i], rarity: "SSR"});
            } else if (_srPool.includes(r[i])) {
                _totalCategorizedRolls.totalSR = _totalCategorizedRolls.totalSR + 1;
                rollResults.push("SR");
                GACHA_RESULTS.push({result: r[i], rarity: "SR"});
            } else {
                _totalCategorizedRolls.totalR = _totalCategorizedRolls.totalR + 1;
                GACHA_RESULTS.push({result: r[i], rarity: "R"});
            };
        };

        if(rollResults.includes("SSR")) {
            setOutcome("You've rolled a SSR!");
        } else if (rollResults.length > 0) {
            setOutcome("You've rolled a SR!");
        } else {
            setOutcome("You've rolled a R!");
        };

        setTotalCategorizedRolls(_totalCategorizedRolls);
    };

    return (
        <GachaDisplayContainer>
            <GachaInfo
                totalRolls={totalRolls}
                totalCategorizedRolls={totalCategorizedRolls}
                outcome={outcome}
                rollSingleGacha={rollSingleGachaHandler}
                rollTenfoldGacha={rollTenfoldGachaHandler}
            />
            <button onClick={GetRollInfoFromItems}>Use Roll Info as Rolls</button>
            <GachaResults gachaResults={GACHA_RESULTS} />
        </GachaDisplayContainer>
    );
};

const GachaDisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid black;
    margin: 25px auto;
    height: 75.5vh;
    width: 99vw;
`;