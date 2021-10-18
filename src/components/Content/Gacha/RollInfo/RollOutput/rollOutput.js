import { useEffect, useState } from "react";
import styled from 'styled-components';

export default function RollOutput(props) {
    const [output, setOutput] = useState([]);

    useEffect(() => {
        const replaceComma = props.input.replace(/,/, " ");
        if(props.input.length > 0) {
            setOutput(replaceComma.split(/\s+/));
        };
    }, [props.input]);

    console.log(output);

    const displayOutput = output.length > 0 ? output.map((out, index) => {
        return (
            <p key={index}>{out}</p>
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
`;