import styled from "styled-components";

export default function Footer() {
    return (
        <FooterContainer>
            <Author>Made by: Ryan Feng</Author>
            <Github>See other projects at: <Link href="https://github.com/RvnVentra" target="_blank">Github</Link></Github>
        </FooterContainer>
    );
};

const FooterContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid black;
    height: 40px;
    width: 98vw;
`;

const Author = styled.p`

`;

const Github = styled.p`

`;

const Link = styled.a`
    text-decoration: none;
    transition: color 100ms linear;

    &:visited {
        color: black;
    };

    &:hover {
        color: lightblue;
    };
`;