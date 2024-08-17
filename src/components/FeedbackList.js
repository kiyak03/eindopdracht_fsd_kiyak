import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FeedbackList({ demoId }) {
	const [feedbackList, setFeedbackList] = useState([]);

	useEffect(() => {
		async function fetchFeedback() {
			try {
				const token = localStorage.getItem('token');
				const response = await axios.get(`http://localhost:8080/feedback/demo/${demoId}`, {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				});
				setFeedbackList(response.data);
			} catch (error) {
				console.error('Error fetching feedback:', error);
			}
		}

		fetchFeedback();
	}, [demoId]);

	const handleDelete = async (id) => {
		try {
			const token = localStorage.getItem('token');
			await axios.delete(`http://localhost:8080/feedback/${id}`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});
			// Remove the deleted feedback from the list
			setFeedbackList(feedbackList.filter((feedback) => feedback.id !== id));
		} catch (error) {
			console.error('Error deleting feedback:', error);
		}
	};


	return (
		<div>
			<h3>Feedback:</h3>
			<ul>
				{feedbackList.map((feedback) => (
				// 	<li key={feedback.id}>{feedback.comment}</li>
				// ))}
					<li key={feedback.id}>
						<strong>Feedback:</strong> {feedback.feedback}<br/>
						<strong>Comment:</strong> {feedback.comment}
						<button onClick={() => handleDelete(feedback.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default FeedbackList;
