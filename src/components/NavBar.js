import React, {useState} from 'react'
import './NavBar.css'
import {NavLink} from "react-router-dom";
// import NavBarTitle from "./NavBarTitle";
import Logo from "../assets/logo_hexagon_white.png";

function NavBar() {
    const [burgerMenu, setBurgerMenu] = useState(false);

    return (
        <div>
            <nav>
                {/*<NavLink to="/" exact activeClassName="active-link">*/}
                {/*    <NavBarTitle icon={Logo} title="Hexagon"/>*/}
                {/*</NavLink>*/}
                    <div>
                        <NavLink to="/" exact activeClassName="active-link">
                        <img src={Logo} alt="logo" id="logo"/>
                        </NavLink>
                    </div>

                    <ul className="navbar-links">
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



            </nav>

        </div>
    )
}

export default NavBar;
