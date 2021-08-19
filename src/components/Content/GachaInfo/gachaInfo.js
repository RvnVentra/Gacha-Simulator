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

    return (
        <div>
            {roll}
            <p>Total Rolls: {totalRolls}</p>
            {displayTotalCategorizedRolls}
            {displayOutcome}
        </div>
    );
};