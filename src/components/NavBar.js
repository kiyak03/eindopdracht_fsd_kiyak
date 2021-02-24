import React, {useState, useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import './NavBar.modules.css'
import {NavLink} from "react-router-dom";
import Logo from "../assets/HEXAGON_TEXT_250x.png";
import BurgerMenu from "./BurgerMenu";
import { AuthContext, useAuthState } from '../context/AuthContext';

function NavBar() {
    const history = useHistory();

    // const [burgerMenuSlider, setBurgerMenuSlider] = useState(false);
    const openBurgerMenu =() =>{
    }

    const {isAuthenticated} = useState();
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated === false) {
            history.push('/');
        }
    }, [isAuthenticated]);

    return (
        <div>
            <nav>
                    <div>
                        <NavLink to="/" exact activeClassName="active-link">
                        <img src={Logo} alt="logo" id="logo"/>
                        </NavLink>
                    </div>

                    <ul className="navbar-links">

                        {isAuthenticated ? (
                            <button
                                type="button"
                                onClick={() => logout()}
                                >
                                Log out
                            </button>
                            ) : (
                            <>

                        <il>
                            <NavLink to="/upload"  activeClassName="active-link">Upload</NavLink>
                        </il>

                            <button
                            type="button"
                            onClick={() => history.push('/login')}
                            >
                            Login
                            </button>
                            <button
                            type="button"
                            onClick={() => history.push('/register')}
                            >
                            Register
                            </button>
                            </>

                        // <il>
                        //     <NavLink to="/login"  activeClassName="active-link">Login</NavLink>
                        // </il>
                        //
                        // <il>
                        //     <NavLink to="/register"  activeClassName="active-link">Register</NavLink>
                        // </il>
                            )}

                    </ul>

                <BurgerMenu className="burger-menu" onClick={openBurgerMenu}/>




            </nav>

        </div>
    )
}

export default NavBar;
