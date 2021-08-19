export default function Gacha_interaction(props) {
    const {rollSingleGacha, rollTenfoldGacha, debugRolls, debugGacha} = props;

    return (
        <div>
            {rollSingleGacha && <button onClick={rollSingleGacha}>Click to Roll</button>}
            {rollTenfoldGacha && <button onClick={rollTenfoldGacha}>Click to Roll 10x</button>}
            {debugRolls && <button onClick={debugRolls}>Debug Rolls</button>}
            {debugGacha && <button onClick={debugGacha}>Debug Gacha</button>}
        </div>
    );
};