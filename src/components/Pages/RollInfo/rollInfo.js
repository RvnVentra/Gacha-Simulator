import { useState } from 'react';
import styled from 'styled-components';

import RollInput from './RollInput/rollInput';
import RollOutput from './RollOutput/rollOutput';

export default function AddRollInfo() {
    const [toggleInputDisplay, setToggleInputDisplay] = useState(false);
    const [input, setInput] = useState("");

    const toggleHandler = () => {
        setToggleInputDisplay(!toggleInputDisplay);
    };

    return (
        <RollInfoDisplay>
            <ToggleDisplay onClick={toggleHandler}>Add Roll Information</ToggleDisplay>

            <RollDisplay toggleDisplay={toggleInputDisplay}>
                <RollInput input={input} setInput={setInput}/>
                <RollOutput input={input} />
            </RollDisplay>
        </RollInfoDisplay>
    );
};

const RollInfoDisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    height: 75.5vh;
    width: 99vw;
    margin: 25px auto;
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
    margin-top: 5px;
    border: 1px solid black;
    width: 90%;
    height: 80%;
    overflow-x: scroll;
`;