import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from '../context/AuthContext';
import axios from 'axios';
import Files from "../components/Files";
import "./Profile.modules.css"
import DemoListItem from "../components/DemoListItem";
import {useParams} from "react-router";


function Profile() {
    const {user, setUser } = useAuthState();
    const [error, setError] = useState('');
    const [protectedData, setProtectedData] = useState();
    const {id} = useParams();



    useEffect(() => {
        async function getProtectedData() {
            setError('');
            try {

                const userRole = user && user.roles;
                console.log(userRole)
                let url;
                if (userRole == 'ROLE_ADMIN' ) {
                    url = 'http://localhost:8080/files/uploads/all';
                } else {
                    url = 'http://localhost:8080/files/uploads/';
                }

                // haal de token op uit de local storage
                const token = localStorage.getItem('token');

                // haal de protected data op met de token meegestuurd
                const response = await axios.get(url, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                console.log('Response from backend:', response.data);

                setProtectedData(response.data);
                console.log('Type of protectedData:', typeof protectedData);
                console.log('Protected Data:', protectedData);
            } catch(e) {
                setError('Er is iets misgegaan bij het ophalen van de data')
            }
        }

        getProtectedData();
    }, [user]);

    useEffect(() => {
        if (Array.isArray(protectedData)) {
            // Handle any additional logic here if needed
        }
    }, [protectedData]);

    return (
        <div className="profile-page">

            <h1>Profile</h1>
            <h2>Details</h2>
            {user &&
            <>
                <p><strong>Username: </strong>{user.username}</p>
                <p><strong>Email: </strong>{user.email}</p>
            </>
            }

                {error && <p className="message-error">{error}</p>}


            <div className="profile-container">
                <h2>Uploads:</h2>
                {protectedData && protectedData.length > 0 ? (
                    <div className="files-container">
                        {protectedData.map((demoFile) => (
                            <DemoListItem
                                key={demoFile.id}
                                title={demoFile.demo}
                                comment={demoFile.comment}
                                demoId={demoFile.id}
                                name={demoFile.name}
                                children="open"
                                downloadUrl={demoFile.downloadUrl}
                                link={`/files/uploads/${demoFile.id}`}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="Geen-bestanden!">Geen bestanden gevonden!</p>
                )}
            </div>

            <p>Back to <Link to="/">Homepage</Link></p>
        </div>
    );
}

export default Profile;