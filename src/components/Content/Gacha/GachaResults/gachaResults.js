import styled from "styled-components";

export default function Gacha_Results(props) {
    const { gachaResults } = props;
    const resultsExists = gachaResults.length === 0;

    const displayResults = gachaResults.map(({ result, rarity }, index) => {
        return (
            <Results key={index} rarity={rarity}>{result}</Results>
        );
    });

    return (
        <ResultsContainer toggleDisplay={resultsExists}>
            <Test>
                <Test2>
                    {displayResults}
                </Test2>
            </Test>
        </ResultsContainer>
    );
};

const ResultsContainer = styled.div`
    justify-content: center;
    border: 1px solid black;
    margin: 0 auto 35px auto;
    width: 45vw;
    // visibility: ${ props => props.toggleDisplay ? "hidden" : "visible" };
`;

const Test = styled.div`
    height: 47vh;
    overflow-y: scroll;
    overflow-x: hidden;
`;

const Test2 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Results = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 7.5px 5px;
    width: 50px;
    height: 50px;

    ${ props => props.rarity === "SSR" && "background-color: gold" }
    ${ props => props.rarity === "SR" && "background-color: silver" }
    ${ props => props.rarity === "R" && "background-color: brown" }
`;