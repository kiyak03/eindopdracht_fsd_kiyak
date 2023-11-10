import React, {useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from "axios";
import {useParams} from "react-router";


const FeedbackButton = () => {
	const [feedback, setFeedback] = useState('');
	const [uploadId, setUploadId] = useState('');
	const {id} = useParams();
	const [demoId, setDemoId] = useState('');
	const [error, setError] = useState('');
	const feedbackOptions = [
		'Very Good',
		'Good',
		'Average',
		'Poor',
		'Very Poor',
	];


	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const token = localStorage.getItem('token');

			const formData = new FormData()
			formData.append("feedback", feedback);
			// `http://localhost:8080/comments/${id}`
			await axios.post(`http://localhost:8080/comments/`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: `Bearer ${token}`,
				}});
		} catch (e) {
			setError("Something went wrong while uploading feedback, please try again.")
		}
	}
	console.log("demoId value:", demoId);
	return (
		<Popup trigger={<button>Feedback</button>} modal>
			{(close) => (
				<div className="modal">
					<a className="close" onClick={close}>
						&times;
					</a>
					<div className="header">
						Give your feedback on the mp3 file
					</div>
					<div className="content">
						<form onSubmit={handleSubmit}>
							<div>
								<label htmlFor="feedback">Your Feedback:</label>
								<select
									id="feedback"
									value={feedback}
									onChange={(e) => setFeedback(e.target.value)}
								>
									<option value="">--Please choose an option--</option>
									{feedbackOptions.map((option) => (
										<option key={option} value={option}>
											{option}
										</option>
									))}
								</select>
							</div>
							<button type="submit">Submit</button>
						</form>
					</div>
				</div>
			)}
		</Popup>
	);
}

export default FeedbackButton;
