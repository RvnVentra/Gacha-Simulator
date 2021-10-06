import styled from "styled-components";

export default function Gacha_interaction(props) {
    const {rollSingleGacha, rollTenfoldGacha} = props;
    // const {rollSingleGacha, rollTenfoldGacha, debugRolls, debugGacha} = props; //Enable for debugging

    return (
        <InteractionContainer>
            {rollSingleGacha && <InteractionButton onClick={rollSingleGacha}>1x Pull</InteractionButton>}
            {rollTenfoldGacha && <InteractionButton onClick={rollTenfoldGacha}>10x Pull</InteractionButton>}
            {/* {debugRolls && <button onClick={debugRolls}>Debug Rolls</button>}
            {debugGacha && <button onClick={debugGacha}>Debug Gacha</button>} */}
        </InteractionContainer>
    );
};

const InteractionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 20vw;
    margin: 5px auto;
`;

const InteractionButton = styled.button`
    background-color: inherit;
    border: 1px solid black;
    border-radius: 7px;
    text-align: center;
    width: 150px;
    padding: 3.5px 7px;
    transition: 100ms linear;

    &:hover {
        cursor: pointer;
        background-color: lightgrey;
        color: white;
    };
`;