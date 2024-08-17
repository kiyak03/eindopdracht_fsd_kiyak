import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';



const FeedbackButton = ({demoId, setDemoId }) => {
	const [feedback, setFeedback] = useState('');
	const [comment, setComment] = useState('');
	const [error, setError] = useState('');
	const { id } = useParams();
	const feedbackOptions = ['Very Good', 'Good', 'Average', 'Poor', 'Very Poor'];
	const [message, setMessage] = useState('');


	async function handleSubmit(e, closePopup) {
		e.preventDefault();
		// if (demoId) {
		try {
			const token = localStorage.getItem('token');

			const formData = new FormData();
			formData.append('feedback', feedback);
			formData.append('comment', comment);
			formData.append('demoId', demoId);

			await axios.post('http://localhost:8080/feedback/', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${token}`,
				},
			});
			setMessage('Feedback and comment submitted successfully!');
			setFeedback(''); // Clear the feedback selection
			setComment('');
			closePopup();
		} catch (e) {
			setError('Something went wrong while uploading feedback, please try again.');
			setMessage('')
		}
		// }else {setError('Demo ID niet beschikbaar')}
	}

	console.log('Feedback: ', feedback);
	console.log('comment: ', comment);
	console.log('DemoId: ', demoId);

	return (
		<Popup trigger={<button>Feedback</button>} modal>
			{(close) => (
				<div className="modal">
					<a className="close" onClick={close}>
						&times;
					</a>
					<div className="header">Give your feedback on the mp3 file</div>
					<div className="content">
						<form onSubmit={(e) => handleSubmit(e, close)}>
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
							<div>
								<label htmlFor="comment">Your Comment:</label>
								<textarea
									id="comment"
									value={comment}
									onChange={(e) => setComment(e.target.value)} // Handle comment input
									placeholder="Enter your comments here"
								/>
							</div>
							<button type="submit">Submit</button>
						</form>
					</div>
				</div>
			)}
		</Popup>
	);
};

export default FeedbackButton;