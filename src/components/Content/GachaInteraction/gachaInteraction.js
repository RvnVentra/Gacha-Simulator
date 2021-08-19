export default function Gacha_interaction(props) {
    const {rollSingleGacha, debugRolls, debugGacha} = props;

    return (
        <div>
            {rollSingleGacha && <button onClick={rollSingleGacha}>Click to Roll</button>}
            {debugRolls && <button onClick={debugRolls}>Debug Rolls</button>}
            {debugGacha && <button onClick={debugGacha}>Debug Gacha</button>}
        </div>
    );
};