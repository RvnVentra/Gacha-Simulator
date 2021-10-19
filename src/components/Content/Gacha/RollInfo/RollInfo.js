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
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    height: 25vh;
    width: 40vw;
`;

const ToggleDisplay = styled.button`
    background-color: inherit;
    border: 1px solid black;
    border-radius: 7px;
    text-align: center;
    width: 25%;
    padding: 3.5px 7px;
    transition: 100ms linear;
    margin: 20px 0;

    &:hover {
        cursor: pointer;
        background-color: lightgrey;
        color: white;
    };
`;

const RollDisplay = styled.div`
    display: ${props => !props.toggleDisplay ? "none" : "flex"};
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 5px;
    border: 1px solid black;
    width: 90%;
    overflow-x: scroll;
`;