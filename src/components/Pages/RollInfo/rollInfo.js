import { useEffect, useState } from 'react';
import styled, { keyframes } from "styled-components";

import RollInput from './RollInput/rollInput';
import RollOutput from './RollOutput/rollOutput';
import FileReq from './FileReq.js/fileReq';

export default function AddRollInfo() {
    const [toggleInputDisplay, setToggleInputDisplay] = useState(false);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const _inputs = JSON.parse(sessionStorage.getItem("Items"));

        if(input && input.length > 0 && input !== JSON.stringify(_inputs)) {
            sessionStorage.setItem("Items", JSON.stringify(input));
        };

        setInput(_inputs);
    }, [input]);

    const toggleHandler = () => {
        setToggleInputDisplay(!toggleInputDisplay);
    };

    const toggleDisplay = input?.length > 0 ? <RollOutput input={input} isLoading={loading} /> : <FileReq isLoading={loading} />;

    return (
        <RollInfoDisplay>
            <ToggleDisplay onClick={toggleHandler}>Add Roll Information</ToggleDisplay>
            <Spinner isLoading={loading} />
            <RollDisplay toggleDisplay={toggleInputDisplay}>
                <RollInput input={input} setInput={setInput} setLoading={setLoading} />
                {toggleDisplay}
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

// From https://www.w3docs.com/snippets/css/how-to-create-loading-spinner-with-css.html#example-of-creating-a-loading-spinner-9
const Spin = keyframes`
    0% {
        transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
        transform: translate3d(-50%, -50%, 0) rotate(360deg);
    };
`;

const Spinner = styled.div`
    visibility: ${ props => !props.isLoading && "hidden" };
    &::before {
        animation: ${Spin} 1.5s linear infinite;
        animation-play-state: inherit;
        border: solid 5px #cfd0d1;
        border-bottom-color: #1c87c9;
        border-radius: 50%;
        content: "";
        height: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 40px;
        will-change: transform;
    };
`;