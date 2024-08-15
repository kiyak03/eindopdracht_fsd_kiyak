import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ReactComponent as Spinner} from '../assets/refresh.svg';
import './Register.modules.css'

function SignUp() {
    // state voor invoervelden (omdat het formulier met Controlled Components werkt!)
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // state voor gebruikers-feedback
    const [createUserSuccess, setCreateUserSuccess] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const[checkedTerms,toggleCheckedTerms] = useState(false);

    async function onSubmit(event) {
        toggleLoading(true);
        setError('');
        // Als je react-hook-form gebruikt hoeft dit niet, dat gebeurt dan automatisch
        event.preventDefault();

        try {
            // 1. Gebruik de data uit het formulier om een gebruiker aan te maken (check documentatie!)
            const response = await axios.post('http://localhost:8080/api/auth/signup', {
                username: username,
                email: email,
                password: password,
                role: ["user"],
            });
            // 2. Kijk goed wat je terugkrijgt!
            console.log(response.data);

            if (response.status === 200) {
                // 3. Als het is gelukt, willen we in DIT component (SignUp) opslaan dat het gelukt is
                setCreateUserSuccess(true);
            }
        } catch(e) {
            console.error(e);
            if (e.message.includes('400')) {
                setError('Er bestaat al een account met deze gebruikersnaam');
            } else {
                setError('Er is iets misgegaan bij het verzenden. Probeer het opnieuw');
            }
        }
        toggleLoading(false);
    }

    return (
        <>
            <div className='register-container'>
                <div className='register-screen'>
                        <div className='register-title'>
                        <h1>Register</h1>
                        </div>
                        <p>We're excited to have you join our community.Just fill in your details below, and you'll be ready to start your journey with us. Let's get started!
                        </p>
                        {/*4. Als het gelukt is, willen we een berichtje laten zien in de HTML, zoals:*/}
                        {createUserSuccess === true && (
                            <h2 className="message-success">Succesfully registered! Click <Link to="/login">here</Link> to log in!</h2>
                        )}
                        <form onSubmit={onSubmit}>
                            <label htmlFor="email-field">
                                Email:
                                <input
                                    type="email"
                                    id="email-field"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>

                            <label htmlFor="username-field">
                                Username:
                                <input
                                    type="text"
                                    id="username-field"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </label>

                            <label htmlFor="password-field">
                                Password:
                                <input
                                    type="password"
                                    id="password-field"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}/>
                            </label>

                            <label htmlFor="terms-and-conditions">
                                <input
                                    type="checkbox"
                                    name="terms-and-conditions"
                                    id="terms-and-conditions"
                                    checked={checkedTerms}
                                    onChange={() => toggleCheckedTerms(!checkedTerms)}
                                />
                                I agree with the terms and conditions!
                            </label>

                            {/*Zorg dat de gebruiker niet nog een keer kan klikken terwijl we een request maken*/}
                            <button
                                type="submit"
                                className="form-button"
                                disabled={!checkedTerms}
                            >
                                {loading ? <Spinner className="loading-icon"/> : 'Create account!'}
                            </button>
                            {error && <p>{error}</p>}
                        </form>
                        <p>Already have an account? You can log in <Link to="/login">here</Link>.</p>
                    </div>
                </div>
            </>

                    );
                    }

                    export default SignUp;




