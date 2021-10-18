import { useState } from 'react';
import styled from 'styled-components';

import GachaInput from './RollInput/rollInput';
import GachaOutput from './RollOutput/rollOutput';

export default function AddGachaInfo() {
    const [toggleInputDisplay, setToggleInputDisplay] = useState(false);
    const [input, setInput] = useState("");

    const toggleHandler = () => {
        setToggleInputDisplay(!toggleInputDisplay);
    };

    return (
        <RollInfoDisplay>
            <button onClick={toggleHandler}>Add Roll Information</button>
            <ToggleRollDisplay toggleDisplay={toggleInputDisplay}>
                <GachaInput input={input} setInput={setInput}/>
                <GachaOutput input={input} />
            </ToggleRollDisplay>
        </RollInfoDisplay>
    );
};

const RollInfoDisplay = styled.div`
    border: 1px solid black;
`;

const ToggleRollDisplay = styled.div`
    display: ${props => !props.toggleDisplay ? "none" : "flex"};
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;