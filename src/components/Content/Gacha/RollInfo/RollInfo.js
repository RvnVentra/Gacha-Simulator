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
            <ToggleDisplay onClick={toggleHandler}>Add Roll Information</ToggleDisplay>
            <RollDisplay toggleDisplay={toggleInputDisplay}>
                <GachaInput input={input} setInput={setInput}/>
                <GachaOutput input={input} />
            </RollDisplay>
        </RollInfoDisplay>
    );
};

const RollInfoDisplay = styled.div`
    border: 1px solid black;
`;

const ToggleDisplay = styled.button`
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

const RollDisplay = styled.div`
    display: ${props => !props.toggleDisplay ? "none" : "flex"};
    align-items: center;
    justify-content: space-evenly;
    margin-top: 5px;
`;