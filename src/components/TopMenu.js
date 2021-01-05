import React from 'react'
import {NavLink} from "react-router-dom";
import PageHeader from "./PageHeader";
import Logo from "../assets/logo_hexagon_white.png";

function TopMenu() {
    return (
        <>
            <nav className="topmenu">
                <PageHeader icon={Logo} title="Hexagon"/>
                <div className="topmenu-container">
                    <ul>
                        <il>
                            <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                        </il>
                        <il>
                            <NavLink to="/upload"  activeClassName="active-link">Upload</NavLink>
                        </il>
                        <il>
                            <NavLink to="/login"  activeClassName="active-link">Login</NavLink>
                        </il>
                        <il>
                            <NavLink to="/register"  activeClassName="active-link">Register</NavLink>
                        </il>
                        <il>
                            <NavLink to="/contact"  activeClassName="active-link">Contact</NavLink>
                        </il>
                    </ul>
                </div>


            </nav>

        </>
    )
}

export default TopMenu;
