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

	return (
		<div>
			<h3>Feedback:</h3>
			<ul>
				{feedbackList.map((feedback) => (
					<li key={feedback.id}>{feedback.comment}</li>
				))}
			</ul>

		</div>
	);
}

export default FeedbackList;
