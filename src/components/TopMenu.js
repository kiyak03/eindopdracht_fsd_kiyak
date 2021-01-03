import React from 'react'
import './App.css';
import {NavLink} from "react-router-dom";

function TopMenu() {
    return (
        <>
            <nav className="topmenu">
                <div className="topmenu-container">
                    <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    <NavLink to="/upload"  activeClassName="active-link">Upload</NavLink>
                    <NavLink to="/login"  activeClassName="active-link">Login</NavLink>
                    <NavLink to="/register"  activeClassName="active-link">Register</NavLink>
                    <NavLink to="/contact"  activeClassName="active-link">Contact</NavLink>
                </div>


            </nav>

        </>
    )
}

export default TopMenu;
