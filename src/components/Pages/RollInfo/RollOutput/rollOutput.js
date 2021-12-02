import { useEffect, useState } from "react";
import styled from 'styled-components';

export default function RollOutput(props) {
    const [output, setOutput] = useState([]);

    useEffect(() => {
        let ssr = [], sr = [], r = [], input = [], _output = [];
        //Split the text doc into 3 arrays when a new line is started
        input = props.input.split(/\r\n+/);
        //Split the text doc into it's given rarities based on the header it's provided
        for(let i = 0; i < input.length; i++) {
            if(input[i].includes("SSR:")) {
                input[i] = input[i].replace("SSR:", "");
                ssr = input[i].split(/,+/);
            } else if (input[i].includes("SR:")) {
                input[i] = input[i].replace("SR:", "");
                sr = input[i].split(/,+/);
            } else {
                input[i] = input[i].replace("R:", "");
                r = input[i].split(/,+/);
            };
        };
        //Trim each array for ease of reading/display
        ssr = ssr.map(arr => arr.trim());
        sr = sr.map(arr => arr.trim());
        r = r.map(arr => arr.trim());
        //Set output as an array with three array based on rarity
        _output.push(ssr, sr, r);
        setOutput(_output);
    }, [props.input]);

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
        <OutputContainer>
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
    border: 1px solid black;
    width: 100%;
    height: 100px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const DisplayContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    height: 100px;
    overflow: auto;
`;

const RarityHeader = styled.p`
    text-align: center;
    text-decoration: underline;
    margin-bottom: 5px;
`;

const DisplayRollOutput = styled.li`
    padding: 5px;
    list-style: none;
`;