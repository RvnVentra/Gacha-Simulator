import { useState } from "react";
import styled from "styled-components";

export default function GachaInput(props) {
    const { input, setInput } = props;
    const [ err, setErr ] = useState(null);

    const fileUploadHandler = (e) => {
        const file = e.target.files[0];
        
        if(file?.type === "text/plain") {
            const readFile = new FileReader();
            readFile.readAsText(file);
            
            const uploading = setInterval(() => {
                if(readFile.readyState === 2) {
                    setInput(readFile.result);
                };
                clearInterval(uploading);
            }, 2500);
            setErr(null);
        } else {
            setErr("Incorrect File/Document type. We only accept Text document/file");
        };
    };

    // const textOnChangeHandler = (e) => {
    //     const value = e.target.value;
    //     setInput(value);
    // };

    return (
        <RollInputContainer>
            <input type="file" onChange={fileUploadHandler} />
            <ErrorDisplay>{err}</ErrorDisplay>
            {/* <textarea value={input} onChange={textOnChangeHandler}></textarea> */}
        </RollInputContainer>
    );
};

const RollInputContainer = styled.div`
    margin: 25px;
    margin-bottom: 10px;
`;

const ErrorDisplay = styled.p`
    color: red;
    margin-top: 15px;
`;