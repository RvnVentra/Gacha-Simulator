export default function GachaInput(props) {
    const { input, setInput } = props;

    const fileUploadHandler = (e) => {
        const file = e.target.files[0];
        
        if(file.type === "text/plain") {
            const readFile = new FileReader();
            readFile.readAsText(file);
            
            const uploading = setInterval(() => {
                if(readFile.readyState === 2) {
                    setInput(readFile.result);
                };
                clearInterval(uploading);
            }, 2500);
        };
    };

    // const textOnChangeHandler = (e) => {
    //     const value = e.target.value;
    //     setInput(value);
    // };

    return (
        <div>
            <input type="file" onChange={fileUploadHandler}></input>
            {/* <textarea value={input} onChange={textOnChangeHandler}></textarea> */}
        </div>
    );
};