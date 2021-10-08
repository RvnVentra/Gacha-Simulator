import styled from 'styled-components';

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
        </InfoContainer>
    );
};

const InfoContainer = styled.div`
    border: 1px solid black;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 98vw;
`;

const OutcomeContainer = styled.div`
    border: 1px solid black;
    padding: 15px;
    margin: 15px 0px;
    width: 200px;
    text-align: center;
`;

const RollsContainer = styled.div`
    display: flex;
    border: 1px solid black;
    margin-bottom: 15px;
`;

const SeparationLine = styled.p`
    font-size: 35px;
    margin: 4px 20px 0px 20px;
`;

const RollsDisplay = styled.p`
    width: 125px;
    text-align: center;
`;

const PercentileContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 0 15px;
    margin-bottom: 15px;
    text-align: center;
`;

const PercentileDisplay = styled.p`
    width: 125px;
    text-align: center;
`;
