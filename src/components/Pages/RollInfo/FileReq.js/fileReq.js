import styled from 'styled-components';

const EXAMPLE_TEXT = `
    SSR: Excalibur, Muramasa, Ghost Reaver, Vindictive Obsidian Slicer, The Facelifter \r\n

    SR: Fury - Butcher of Secrecy, Shadowkiss - Shiv of the Plague \r\n

    R: Bronze Sword, Bronze Dagger, Bronze Bow \r\n
    
    ------OR------ \r\n

    SSR: Excalibur, Muramasa, Ghost Reaver, Vindictive Obsidian Slicer, The Facelifter \r\n
    SR: Fury - Butcher of Secrecy, Shadowkiss - Shiv of the Plague \r\n
    R: Bronze Sword, Bronze Dagger, Bronze Bow
`;

export default function FileReq() {
    return (
        <FileReqContainer>
            <InstructionText>The Text document should follow the format shown below for it to be read properly</InstructionText>
            <InstructionText>&#8595;</InstructionText>
            <InputExample readOnly={true}>
                {EXAMPLE_TEXT}
            </InputExample>
        </FileReqContainer>
    );
};

const FileReqContainer = styled.div`
    border-top: 1px dotted black;
    border-bottom: 1px dotted black;
    margin: 5px 0;
    padding: 20px 0;
`;

const InstructionText = styled.p`
    text-align: center;
    margin-bottom: 10px;
`;

const InputExample = styled.textarea`
    width: 800px;
    height: 290px;
    resize: none;
`;