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
            {displayResults}
        </ResultsContainer>
    );
};

const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    border: 1px solid black;
    margin: 0 auto;
    width: 90vw;
    height: 60vh;
    padding: 5px;
    font-size: 15px;
`;

const Results = styled.li`
    border-bottom: 1px solid black;
    list-style: none;
    width: 50px;
    padding: 1px 0px;
    text-align: center;

    ${props => props.rarity === "SSR" && "background-color: gold"}
    ${props => props.rarity === "SR" && "background-color: silver"}
    ${props => props.rarity === "R" && "background-color: brown"}
`;