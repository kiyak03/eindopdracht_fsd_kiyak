import React, {useEffect,useState} from 'react';
import "./DemoListItem.modules.css"
import axios from "axios";
import {useParams} from "react-router";
import FeedbackButton from "./FeedbackButton";
import FeedbackList from "./FeedbackList";

// const FeedbackListId = ({ demoId }) => {
// 	const [feedback, setFeedback] = useState([]);
// 	const [errorFeedback, setErrorFeedback] = useState('');
//
// 	useEffect(() => {
// 		const fetchFeedback = async () => {
// 			try {
// 				const response = await axios.get(`http://localhost:8080/feedback/${demoId}`);
// 				setFeedback(response.data);
// 			} catch (error) {
// 				setErrorFeedback('Error fetching feedback');
// 			}
// 		};
//
// 		fetchFeedback();
// 	}, [demoId]);
//
// 	if (errorFeedback) {
// 		return <p>{errorFeedback}</p>;
// 	}
//
// 	return (
// 		<div>
// 			<h3>Feedback for Demo {demoId}</h3>
// 			<ul>
// 				{feedback.map((entry) => (
// 					<li key={entry.id}>{entry.comment}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// };
//
//

function DemoListItem({title, name, link, comment, downloadUrl, demoId}) {
	console.log("demo id " +   demoId)
	// const [file, setFile] = useState(null);
	const [fileLink, setFileLink] = useState("");
	const [audioLink,setAudioLink] = useState("");
	const [feedback, setFeedback] = useState("");
	const [error, setError] = useState('');
	const {id} = useParams();
	const [adminFeedback, setAdminFeedback] = useState("");



	useEffect(() => {
		const token = localStorage.getItem('token');

		const fetchFile = async () => {
			try {
				const response = await axios.get(downloadUrl, {
					headers: {
						'Authorization': `Bearer ${token}`,
						'Content-Type': 'application/octet-stream',
					},
					responseType: 'blob',
				});
				makeTemplink(new Blob([response.data]))
			} catch (error) {
				console.error({error});
			}
		};

		fetchFile();
	}, []);

	const makeTemplink = (file) => {
		const audioFile = window.URL.createObjectURL(file);
		setAudioLink(audioFile)
		let tempLink = document.createElement('a');
		tempLink.href = audioFile;
		tempLink.setAttribute('download', ['filename.mp3']);
		setFileLink(tempLink)
	};

	const downloadFile = ()=> {
		fileLink.click();
	}

	return (
			<div onClick={()=> console.log(link)} role="button" className="demo-container">
				<img src="https://cdn-icons-png.flaticon.com/512/2305/2305975.png" className="mp3-icon"/>
				<div className="details-container">

					<div>
					<b>Title:
						{title}
					</b>
				</div>
				<div>
					<p>By:
						{name}
					</p>
				</div>
					<div>
						<p>Message:
							 {comment}
						</p>
					</div>
				</div>
				{/*<div>*/}
				{/*	<div>*/}
				{/*		<FeedbackListId demoId={demoId} />*/}
				{/*	</div>*/}
				{/*</div>*/}

				{/*{console.log(audioLink)}*/}
				<audio controls src={audioLink} type="audio/mpeg">
				</audio>

				<button onClick={()=> downloadFile()}>
					download
				</button>

				<FeedbackButton demoId={demoId} feedback={feedback} setFeedback={setFeedback} />
				<FeedbackList demoId={demoId} /> {/* Display the FeedbackList for the specific demoId */}

			</div>
	)
}

export default DemoListItem