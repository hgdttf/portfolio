import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
return (
    <nav className="nav">
    <h2 className="logo">Rakshit.dev</h2>
    <div>
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/projects" className="link">Projects</NavLink>
    </div>
    </nav>
);
}

export default Navbar;