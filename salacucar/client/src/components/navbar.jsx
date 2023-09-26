import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Hamburger from 'hamburger-react'


function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    const routes = [
        { label: "Home", to: "/" },
        { label: "Products", to: "/products" },
        { label: "About", to: "/about" },
        { label: "Contacts", to: "/contacts" },
    ];

    return (
        <div className="navbar-main-div">
            
            <div className="navbar-mobile-hamburger" onClick={() => setOpenMenu(!openMenu)}>
                ☰
            </div>
            <nav className={`navbar-links ${openMenu ? "opened" : ""}`}>
                {routes.map((route, index) => (
                    <NavLink
                        key={index}
                        to={route.to}
                        className={({ isActive }) => isActive ? "navbar-item active" : "navbar-item"}
                        onClick={() => setOpenMenu(false)}
                    >
                        {route.label}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}

export default Navbar;

