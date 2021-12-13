import { useEffect, useState } from "react";
import styled from 'styled-components';

export default function RollOutput(props) {
    const [output, setOutput] = useState([]);
    const { input } = props;

    useEffect(() => {
        let ssr = [], sr = [], r = [], _input = [], _output = [];
        //Split the text doc into 3 arrays when a new line is started
        _input = input.split(/\r\n+/);
        //Split the text doc into it's given rarities based on the header it's provided
        for(let i = 0; i < _input.length; i++) {
            if(_input[i].includes("SSR:")) {
                _input[i] = _input[i].replace("SSR:", "");
                ssr = _input[i].split(/,+/);
            } else if (_input[i].includes("SR:")) {
                _input[i] = _input[i].replace("SR:", "");
                sr = _input[i].split(/,+/);
            } else {
                _input[i] = _input[i].replace("R:", "");
                r = _input[i].split(/,+/);
            };
        };
        //Trim each array for ease of reading/display
        ssr = ssr.map(arr => arr.trim());
        sr = sr.map(arr => arr.trim());
        r = r.map(arr => arr.trim());
        //Set output as an array with three array based on rarity
        _output.push(ssr, sr, r);
        setOutput(_output);
    }, [input]);

    const displaySSROutput = output[0]?.map((out, index) => {
        return (
            <DisplayRollOutput key={index}>{out}</DisplayRollOutput>
        );
    });

    const displaySROutput = output[1]?.map((out, index) => {
        return (
            <DisplayRollOutput key={index}>{out}</DisplayRollOutput>
        );
    });

    const displayROutput = output[2]?.map((out, index) => {
        return (
            <DisplayRollOutput key={index}>{out}</DisplayRollOutput>
        );
    });

    return (
        <OutputContainer input={input}>
            <DisplayContainer>
                <RarityHeader>SSR</RarityHeader>
                {displaySSROutput}
            </DisplayContainer>
            <DisplayContainer>
                <RarityHeader>SR</RarityHeader>
                {displaySROutput}
            </DisplayContainer>
            <DisplayContainer>
                <RarityHeader>R</RarityHeader>
                {displayROutput}
            </DisplayContainer>
        </OutputContainer>
    );
};

const OutputContainer = styled.div`
    visibility: ${props => props.input.length === 0 && "hidden"};
    border: 1px solid black;
    width: 95%;
    height: 80%;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const DisplayContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    height: 95%;
    width: 15%;
    overflow: auto;
`;

const RarityHeader = styled.p`
    text-align: center;
    text-decoration: underline;
    margin: 5px 0;
    font-weight: bold;
`;

const DisplayRollOutput = styled.li`
    padding: 5px;
    padding-left: 10px;
    list-style: none;
`;