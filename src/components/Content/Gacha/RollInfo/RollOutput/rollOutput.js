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

    const displayOutput = output.length > 0 ? output.map((out, index) => {
        return (
            <div key={index}>{out}</div>
        );
    }) : <p>Add info to display</p>;

    return (
        <OutputContainer>
            {displayOutput}
        </OutputContainer>
    );
};

const OutputContainer = styled.div`
    border: 1px solid black;
    width: 300px;
    height: 100px;
    margin: 10px 0;
    overflow-x: auto;
`;