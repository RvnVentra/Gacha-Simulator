import { useState } from "react";
import styled, { keyframes } from "styled-components";

export default function GachaInput(props) {
    const { input, setInput } = props;
    const [ err, setErr ] = useState(null);
    const [ loading, setLoading ] = useState(null);

    const fileUploadHandler = (e) => {
        const file = e.target.files[0];
        
        if(file?.type === "text/plain") {
            setLoading(true);
            const readFile = new FileReader();
            readFile.readAsText(file);
            
            const uploading = setInterval(() => {
                if(readFile.readyState === 2) {

                    setInput(readFile.result);
                };
                clearInterval(uploading);
                setLoading(false);
            }, 2500);
            setErr(null);
        } else {
            setInput("");
            setErr("Incorrect File/Document type. We only accept Text document/file");
        };
    };

    // const textOnChangeHandler = (e) => {
    //     const value = e.target.value;
    //     setInput(value);
    // };

    return (
        <RollInputContainer>
            <RollInput type="file" onChange={fileUploadHandler} />
            <ErrorDisplay>{err}</ErrorDisplay>
            <Spinner isLoading={loading} />
            {/* <textarea value={input} onChange={textOnChangeHandler}></textarea> */}
        </RollInputContainer>
    );
};

const RollInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px;
    margin-bottom: 10px;
`;

const RollInput = styled.input`
    margin: 0 auto;
`;

const ErrorDisplay = styled.p`
    color: red;
    margin-top: 15px;
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