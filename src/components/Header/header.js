import styled from "styled-components";

export default function Header() {
    return (
        <HeaderContainer>Gacha Simulator</HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7vh;
    font-weight: bold;
    font-size: 2.25rem;
    margin-bottom: 15px;
`;