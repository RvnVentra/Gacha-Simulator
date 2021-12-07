import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function navMenu() {
    return (
        <NavDisplay>
            <Home>
                <NavItems>
                    <NavItem to="/">Home</NavItem>
                </NavItems>
            </Home>
            <Other>
                <NavItems>
                    <NavItem to="/gacha-sim">Gacha Simulator</NavItem>
                </NavItems>
                <NavItems>
                    <NavItem to="/roll-info">Roll Info</NavItem>
                </NavItems>
            </Other>
        </NavDisplay>
    );
};

const NavDisplay = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    width: 95%;
    margin: 0 auto 10px auto;
`;

const Home = styled.div`
    margin-left: 5px;
`;

const Other = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 5px;
`;

const NavItems = styled.li`
    list-style: none;
    margin: 0 5px;
`;

const NavItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: 1px solid black;
    border-radius: 10px;
    height: 35px;
    width: 125px;
    
    &:visited {
        color: black;
    };

    &:hover, &:focus {
        font-style: italic;
        font-weight: bold;
    };
`;