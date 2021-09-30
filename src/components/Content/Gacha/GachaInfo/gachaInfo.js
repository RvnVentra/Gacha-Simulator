import styled from 'styled-components';

export default function Gacha_info(props) {
    const {roll, totalRolls, totalCategorizedRolls, outcome} = props;
    
    const displayTotalCategorizedRolls = (
        <RollsContainer>
          <RollsDisplay>SSRs Pulled: {totalCategorizedRolls.totalSSR}</RollsDisplay>
          <RollsDisplay>SRs Pulled: {totalCategorizedRolls.totalSR}</RollsDisplay>
          <RollsDisplay>Rs Pulled: {totalCategorizedRolls.totalR}</RollsDisplay>
        </RollsContainer>
      );

    const displayOutcome = outcome && (
        <p>{outcome}</p>
    );

    const isTenfoldRoll = roll?.length === 10 ? (
        roll.map((r, index) => {
            return ( <li key={index}>{r}</li> );
        })
    ) : <p>{roll}</p>

    return (
        <InfoContainer>
            {/* {isTenfoldRoll} */}
            <p>Total Rolls: {totalRolls}</p>
            <SeparationLine>|</SeparationLine>
            {displayTotalCategorizedRolls}
            {displayOutcome}
        </InfoContainer>
    );
};

const InfoContainer = styled.div`
    border: 1px solid black;
    margin: 0px auto;
    display: flex;

    align-items: center;
    justify-content: center;
`;

const RollsContainer = styled.div`
    display: flex;
    flex-direction: horizontal;
`;

const SeparationLine = styled.p`
    font-size: 35px;
    margin: 0 20px 2px 20px;
`;

const RollsDisplay = styled.p`
    width: 125px;
`;