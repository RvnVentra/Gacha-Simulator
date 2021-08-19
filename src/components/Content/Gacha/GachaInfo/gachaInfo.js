export default function Gacha_info(props) {
    const {roll, totalRolls, totalCategorizedRolls, outcome} = props;
    
    const displayTotalCategorizedRolls = (
        <div>
          <p>SSRs Pulled: {totalCategorizedRolls.totalSSR}</p>
          <p>SRs Pulled: {totalCategorizedRolls.totalSR}</p>
          <p>Rs Pulled: {totalCategorizedRolls.totalR}</p>
        </div>
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
        <div>
            {isTenfoldRoll}
            <p>Total Rolls: {totalRolls}</p>
            {displayTotalCategorizedRolls}
            {displayOutcome}
        </div>
    );
};