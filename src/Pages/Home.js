import React from 'react'
// import NavBarTitle from "../components/NavBarTitle";
import {Link} from "react-router-dom";
import { useAuthState } from '../context/AuthContext';
// import Logo from "../assets/logo_hexagon_white.png"
import '../App.css'
import FileUploader from "../components/FileUploader";


function Home(){
    const { isAuthenticated } = useAuthState();


    return(
        <>
        <div className="homepage-text">
            {/*<NavBarTitle icon={Logo} title="Test title"/>*/}
            <h1>Welkom  dit is de Home pagina!</h1>
            <p>Launched in 2015, Don's record label "HEXAGON" won Best New Label on Beatport for having the most
                Top 10 records in its first year, while Don has also been credited as the "best selling house & future
                house artist of all-time" on Beatport. His HEXAGON Radio show is currently broadcast in over 35 countries
                globally and holds a weekly Top 10 position in the iTunes podcast section every week as it reached millions
                of people across the planet.
            </p>

            <Link to={"/upload"}>
                <button type='button' id="demo-button">Drop demo NOW!</button>
            </Link>


        </div>
        <FileUploader/>
        </>

    );
}

export default Home;