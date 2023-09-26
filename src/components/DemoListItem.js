import React, {useEffect,useState} from 'react';
import "./DemoListItem.modules.css"
import axios from "axios";



function DemoListItem({title, name, link, comment, downloadUrl}) {
	console.log(downloadUrl)
	// const [file, setFile] = useState(null);
	const [fileLink, setFileLink] = useState("");
	const [audioLink,setAudioLink] = useState("")



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
					<b>Titel:
						{title}
					</b>
				</div>
				<div>
					<p>Door:
						{name}
					</p>
				</div>
					<div>
						<p>Bericht:
							 {comment}
						</p>
					</div>
				</div>

				{/*{console.log(audioLink)}*/}
				<audio controls src={audioLink} type="audio/mpeg">
				</audio>

				<button onClick={()=> downloadFile()}>
					download
				</button>
		</div>
	)
}

export default DemoListItem