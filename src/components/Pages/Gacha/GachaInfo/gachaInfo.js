import styled from 'styled-components';

import GachaInteraction from '../GachaInteraction/gachaInteraction';

const DecimalToPercent = function(value) {
    return value ? (value * 100).toFixed(2) + '%' : '0%';
};

export default function Gacha_Info(props) {
    const {totalRolls, totalCategorizedRolls, outcome} = props;

    const { totalSSR, totalSR, totalR } = totalCategorizedRolls;
    
    const displayTotalCategorizedRolls = (
        <RollsContainer>
            <RollsDisplay>Total Rolls: {totalRolls}</RollsDisplay>
            <SeparationLine>|</SeparationLine>
            <RollsDisplay>SSRs Pulled: {totalSSR}</RollsDisplay>
            <RollsDisplay>SRs Pulled: {totalSR}</RollsDisplay>
            <RollsDisplay>Rs Pulled: {totalR}</RollsDisplay>
        </RollsContainer>
    );

    const displayPercentile = (
        <PercentileContainer>
            <PercentileDisplay>SSR Rate: {DecimalToPercent(totalSSR / totalRolls)}</PercentileDisplay>
            <PercentileDisplay>SR Rate: {DecimalToPercent(totalSR / totalRolls)}</PercentileDisplay>
            <PercentileDisplay>R Rate: {DecimalToPercent(totalR / totalRolls)}</PercentileDisplay>
        </PercentileContainer>
    );

    const displayOutcome = outcome ? <p>{outcome}</p> : <p>Press "Roll" to roll</p>;

    // const isTenfoldRoll = roll?.length === 10 ? (
    //     roll.map((r, index) => {
    //         return ( <li key={index}>{r}</li> );
    //     })
    // ) : <p>{roll}</p>

    return (
        <InfoContainer>
            <OutcomeContainer>{displayOutcome}</OutcomeContainer>

            {displayTotalCategorizedRolls}
            {displayPercentile}

            <GachaInteraction
                rollSingleGacha={props.rollSingleGacha}
                rollTenfoldGacha={props.rollTenfoldGacha}
                debugRolls={props.debugRolls}
                debugGacha={props.debugGacha}
            />
        </InfoContainer>
    );
};

const InfoContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 28%;
    width: 35%;
`;

const OutcomeContainer = styled.div`
    border: 1px solid black;
    margin: 15px 0px 20px 0px;
    width: 35%;
    text-align: center;
`;

const RollsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid black;
    margin-bottom: 15px;
    width: 70%;
`;

const SeparationLine = styled.p`
    font-size: 35px;
    margin: 4px 20px 5px 20px;
`;

const RollsDisplay = styled.p`

`;

const PercentileContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    border: 1px solid black;
    margin-bottom: 25px;
    width: 60%;
`;

const PercentileDisplay = styled.p`

`;
