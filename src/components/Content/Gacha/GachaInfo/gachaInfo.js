import styled from 'styled-components';

export default function Gacha_info(props) {
    const {roll, totalRolls, totalCategorizedRolls, outcome} = props;
    
    const displayTotalCategorizedRolls = (
        <RollsContainer>
            <RollsDisplay>Total Rolls: {totalRolls}</RollsDisplay>
            <SeparationLine>|</SeparationLine>
            <RollsDisplay>SSRs Pulled: {totalCategorizedRolls.totalSSR}</RollsDisplay>
            <RollsDisplay>SRs Pulled: {totalCategorizedRolls.totalSR}</RollsDisplay>
            <RollsDisplay>Rs Pulled: {totalCategorizedRolls.totalR}</RollsDisplay>
        </RollsContainer>
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
        </InfoContainer>
    );
};

const InfoContainer = styled.div`
    border: 1px solid black;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
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
