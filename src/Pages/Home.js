import React from 'react'
// import PageHeader from "../components/PageHeader";
import {Link} from "react-router-dom";
// import Logo from "../assets/logo_hexagon_white.png"

function Home(){
    return(
        <div>
            {/*<PageHeader icon={Logo} title="Test title"/>*/}
        <h1>Welkom  dit is de Home pagina!</h1>
            <Link to={"/upload"}>

                <button type='button'>Drop demo NOW!</button>
            </Link>


        </div>


    );
}

export default Home;