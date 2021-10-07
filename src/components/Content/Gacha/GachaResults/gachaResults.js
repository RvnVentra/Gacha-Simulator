import styled from "styled-components";

export default function Gacha_Results(props) {
    const { gachaResults } = props;

    const displayResults = gachaResults.map(({ result, rarity }, index) => {
        return (
            <Results key={index} rarity={rarity}>{result}</Results>
        );
    });

    return (
        <ResultsContainer>
            <Test>
                {displayResults}
            </Test>
        </ResultsContainer>
    );
};

const ResultsContainer = styled.div`
    justify-content: center;
    border: 1px solid black;
    margin: 0 auto;
    width: 90vw;
`;

const Test = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: inherit;
    margin: 15px;
`;

const Results = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 5px;
    width: 50px;
    height: 50px;

    ${props => props.rarity === "SSR" && "background-color: gold"}
    ${props => props.rarity === "SR" && "background-color: silver"}
    ${props => props.rarity === "R" && "background-color: brown"}
`;