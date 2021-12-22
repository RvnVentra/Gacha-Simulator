import { useEffect, useState } from "react";
import styled from 'styled-components';

import SsToString from '../../../Common/SessionStorage/convertToString';

export default function RollOutput(props) {
    const [output, setOutput] = useState([]);
    const { input, isLoading } = props;

    useEffect(() => {
        let _output = SsToString(input);
        setOutput(_output.output);
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
        <OutputContainer input={input}  isLoading={isLoading}>
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
    visibility: ${ props => (props.input.length === 0 || props.isLoading) && "hidden" };
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