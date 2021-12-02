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
`;

const Home = styled.div`
    margin-left: 0;
`;

const Other = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 0;
`;

const NavItems = styled.li`
    list-style: none;
`;

const NavItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: 1px solid black;
    border-radius: 10px;
    height: 50px;
    width: 125px;
    
    &:visited {
        color: black;
    };

    &:hover, &:focus {
        color: white;
    };
`;