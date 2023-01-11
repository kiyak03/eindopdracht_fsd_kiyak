import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from '../context/AuthContext';
import axios from 'axios';
import Files from "../components/Files";

function Profile() {
    const {user, logout } = useAuthState();
    const [error, setError] = useState('');
    const [protectedData, setProtectedData] = useState([]);

    useEffect(() => {
        async function getProtectedData() {
            setError('');
            try {
                // haal de token op uit de local storage
                const token = localStorage.getItem('token');

                // haal de protected data op met de token meegestuurd ('http://localhost:8080/api/user')
                const response = await axios.get('http://localhost:8080/files/all', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
console.log({response});
                // zet deze data in de state zodat we dit in het component kunnen laten zien
                setProtectedData(response.data);
                console.log(protectedData);
            } catch(e) {
                setError('Er is iets misgegaan bij het ophalen van de data')
            }
        }

        getProtectedData();
    }, []);

    return (
        <>

            <h1>Profielpagina</h1>
            <h2>Gegevens</h2>
            {user &&
            <>
                <p><strong>Gebruikersnaam: </strong>{user.username}</p>
                <p><strong>Email: </strong>{user.email}</p>
            </>
            }

                <h2>Afgeschermde content voor ingelogde gebruikers</h2>
                {/*{protectedData && <p>{protectedData}</p>}*/}
                {error && <p className="message-error">{error}</p>}


            <div className="profile-container">
                {protectedData && protectedData.length > 0 ?
                    <>
                        <div className="files-container">
                            {protectedData.map((files)=>{
                                return <Files
                                title={files.demo}
                                message={files.message}
                                key={files.id}
                                name={files.name}
                                children="open"
                                link={`/files/${files.id}`}
                                />
                            })}
                        </div>
                    </> :
                        <p className="Geen-bestanden!">Geen bestanden gevonden!</p>}
                </div>




            <button
                type="button"
                onClick={() => logout()}
            >
                Log out
            </button>
                <p>Terug naar de <Link to="/">Homepagina</Link></p>


        </>
    );
}

export default Profile;