export default function Gacha_Results(props) {
    const { gachaResults } = props;

    const displayResults = gachaResults.map((result, index) => {
        return (
            <li key={index}>{result}</li>
        );
    });

    return (
        <div>
            {displayResults}
        </div>
    );
};