import styled from 'styled-components';

const EXAMPLE_TEXT = `
    SSR: Excalibur, Muramasa, Ghost Reaver, Vindictive Obsidian Slicer, The Facelifter

    SR: Fury - Butcher of Secrecy, Shadowkiss - Shiv of the Plague

    R: Bronze Sword, Bronze Dagger, Bronze Bow
    
    \r\n    ------OR------\r\n

    SSR: Excalibur, Muramasa, Ghost Reaver, Vindictive Obsidian Slicer, The Facelifter
    SR: Fury - Butcher of Secrecy, Shadowkiss - Shiv of the Plague
    R: Bronze Sword, Bronze Dagger, Bronze Bow
`;

export default function FileReq(props) {
    return (
        <FileReqContainer isLoading={props.isLoading}>
            <InstructionText>Uploaded document/file must be in text and should follow the format shown below for it to be read properly</InstructionText>
            <InstructionText>&#8595;</InstructionText>
            <InputExample readOnly={true} defaultValue={EXAMPLE_TEXT} />
        </FileReqContainer>
    );
};

const FileReqContainer = styled.div`
    visibility: ${ props => props.isLoading && "hidden" };
    border-top: 1px dotted black;
    border-bottom: 1px dotted black;
    margin: 45px 0;
    padding: 45px 0;
`;

const InstructionText = styled.p`
    text-align: center;
    margin-bottom: 10px;
`;

const InputExample = styled.textarea`
    width: 800px;
    height: 230px;
    resize: none;
`;