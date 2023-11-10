import React, {useEffect, useState} from "react";

import axios from "axios";
import {useParams} from "react-router";
import { useAuthState } from '../context/AuthContext';


function Demo() {
    const {id} = useParams();
    const [error, setError] = useState('');
    const [upload, setUpload] = useState([]);
    const {isAdmin} = useAuthState();
    const [protectedData, setProtectedData] = useState([])
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        getUpload();
    }, [])

    async function getUpload() {
        setError('');
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8080/files/uploads/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setUpload(response.data);
        } catch (e) {
            setError("Something went wrong")
        }
    }

    useEffect(() => {
        async function getProtectedData() {
            setError('');
            try {
                const token = localStorage.getItem('token');

                const response = await axios.get('http://localhost:8080/api/user/user', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                setProtectedData(response.data);
            } catch(e) {
                setError('Something went wrong while fetching data')
            }
        }
        getProtectedData();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');

            const formData = new FormData()
            formData.append("feedback", feedback);

            await axios.get(`http://localhost:8080/files/uploads/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                }});
        } catch (e) {
            setError("Something went wrong while uploading feedback, please try again.")
        }
    }

    return (
        <>
            <div className="detail-page-container">
                <div className="demo">
                    <div className="demo-title">
                        <h1>{upload.demo}</h1>
                    </div>
                    <div className="demo-upload-by">
                        <p>Uploaded by: {upload.name}</p>
                        <p>Type: {upload.contentType}</p>
                    </div>
                    <div className="demo-description">
                        <p className="demo-description-comment">
                            Comment: {upload.comment}
                        </p>
                    </div>
                    <audio controls src={upload.downloadUrl} type="audio/mpeg">
                    </audio>
                    <p><button href={upload.downloadUrl}>Download!</button></p>
                    <form className="demo-feedback-container" onSubmit={handleSubmit}>
                        <label className="demo-feedback-title">Feedback</label>
                        <textarea className="demo-feedback-comment"
                                  name="feedback"
                                  rows="6"
                                  maxLength="250"
                                  value={feedback}
                                  onChange={(e) => setFeedback(e.target.value)}
                        />
                        <button type='submit'>Give Feedback </button>
                    </form>
                </div>
                <div className="show-feedback">
                    <p>Feedback:</p>
                    <p>{upload.feedback}</p>
                </div>
            </div>
        </>
    );
}

export default Demo;