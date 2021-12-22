import { useState } from "react";
import styled from "styled-components";

export default function GachaInput(props) {
    const { input, setInput,  setLoading } = props;
    const [err, setErr] = useState(null);
    

    const fileUploadHandler = (e) => {
        const file = e.target.files[0];

        console.log(file);
        
        if(file) {
            if(file.type === "text/plain") {
                setLoading(true);
                const readFile = new FileReader();
                readFile.readAsText(file);
                
                setTimeout(() => {
                    if(readFile.readyState === 2) {
                        setInput(readFile.result);
                    };
                    setLoading(false);
                }, 2500);

                setErr(null);
            } else {
                setInput("");
                setLoading(true);
                sessionStorage.removeItem("Items");
                setTimeout(() => {
                    setErr("Incorrect File/Document type.");
                    setLoading(false);
                }, 2500);
            };
        } else {
            setInput("");
            setErr(null);
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
            
            {/* <textarea value={input} onChange={textOnChangeHandler}></textarea> */}
        </RollInputContainer>
    );
};

const RollInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px 0;
    margin-bottom: 10px;
`;

const RollInput = styled.input`
    margin: 0 auto;
`;

const ErrorDisplay = styled.p`
    color: red;
    margin-top: 15px;
`;

