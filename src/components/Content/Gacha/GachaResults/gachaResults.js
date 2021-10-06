import styled from "styled-components";

export default function Gacha_Results(props) {
    const { gachaResults } = props;

    const displayResults = gachaResults.map((result, index) => {
        return (
            <Results key={index}>{result}</Results>
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
    align-items: first baseline;
    border: 1px solid black;
    margin: 0 auto;
    width: 90vw;
    height: 60vh;
    font-size: 15px;
`;

const Results = styled.li`
    list-style: none;
    width: 50px;
    padding: 0.3px 0px;
    text-align: center;
`;