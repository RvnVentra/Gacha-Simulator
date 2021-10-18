import { useState } from 'react';
import styled from 'styled-components';

import GachaInput from './RollInput/rollInput';

export default function AddGachaInfo() {
    const [toggleInputDisplay, setToggleInputDisplay] = useState(false);

    const toggleHandler = () => {
        setToggleInputDisplay(!toggleInputDisplay);
    };

    return (
        <div>
            <button onClick={toggleHandler}>Add Roll Information</button>
            <ToggleGachaInputDisplay toggleDisplay={toggleInputDisplay}>
                <GachaInput />
            </ToggleGachaInputDisplay>
        </div>
    );
};

const ToggleGachaInputDisplay = styled.div`
    display: ${props => !props.toggleDisplay && "none"};
`;