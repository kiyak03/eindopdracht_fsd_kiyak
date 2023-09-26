import React, {useState, useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import './NavBar.modules.css'
import {NavLink} from "react-router-dom";
import Logo from "../assets/HEXAGON_TEXT_250x.png";
// import BurgerMenu from "./BurgerMenu";
import { AuthContext, useAuthState } from '../context/AuthContext';

function NavBar() {
    const history = useHistory();

    // const [burgerMenuSlider, setBurgerMenuSlider] = useState(false);
    // const openBurgerMenu =() =>{
    // }

    const {isAuthenticated} = useAuthState();
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

                    <div className="navbar-links">

                            <button onClick={() => history.push("/upload")}>Upload</button>

                        {isAuthenticated ? (
                            <>
                            <button
                                    type="button"
                                    onClick={()=>history.push("/profile")}
                                >
                                Profile
                                </button>
                            <button
                                type="button"
                                onClick={() => logout()}
                                >
                                Log out
                            </button>

                            </>
                        ) : (
                                <>
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
                            )}
                    </div>

                {/*<BurgerMenu className="burger-menu" onClick={openBurgerMenu}/>*/}




            </nav>

        </div>
    )
}

export default NavBar;
