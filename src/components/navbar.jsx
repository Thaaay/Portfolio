import React, { useState } from "react";
import '../navbar.css'
import { act } from "@testing-library/react";

function NavBar() {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");

    const navToggle = () => {
        active === "nav__menu"
            ? setActive("nav__menu nav__active")
            : setActive("nav__menu");

        toggleIcon === "nav__toggler"
            ? setToggleIcon("nav__toggler toggle")
            : setToggleIcon("nav__toggler");

    };

    return (
        <nav className="nav">
            <a href="#" className="nav__brand">Thaynara Gimenes</a>
            <ul className={active}>
                <li className="nav__item">
                    <a href="#" className="nav__link">Home</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        About</a></li>
                <li className="nav__item">
                    <a href="https://www.linkedin.com/in/thaynara-gimenes/" className="nav__link">Redes</a></li>
                <li className="nav__item">
                    <a href="#" className="nav__link">Skills</a></li>
                <li className="nav__item">
                    <a href="https://github.com/Thaaay" className="nav__link">Portfolio</a></li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}


export default NavBar;