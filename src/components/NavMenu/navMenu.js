import { Link } from "react-router-dom";

export default function navMenu() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/gacha-landing">Gacha</Link>
            </li>
        </ul>
    );
};