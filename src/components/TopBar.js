import React from "react";
import "./TopBar.css";
import LogoImg from "../assets/Nulo-Logo.png";

function TopBar() {
    return (
        <div className="NavBar-container">
            <img src={LogoImg} alt="img-logo" />
            <nav className="NavBar">
                <ul>
                    <li>Home</li>
                    <li>Portfólio</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
}

export default TopBar;
