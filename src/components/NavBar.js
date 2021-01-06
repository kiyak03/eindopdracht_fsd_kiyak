import React from 'react'
import './NavBar.css'
import {NavLink} from "react-router-dom";
import NavBarTitle from "./NavBarTitle";
import Logo from "../assets/logo_hexagon_white.png";

function NavBar() {
    return (
        <>
            <nav>
                <NavLink to="/" exact activeClassName="active-link">
                    <NavBarTitle icon={Logo} title="Hexagon"/>
                </NavLink>
                <div className="navbar-container">
                    <ul>
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

export default NavBar;
