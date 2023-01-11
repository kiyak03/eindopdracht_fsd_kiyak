import React from "react";
import axios from "axios";
import {useParams} from "react-router-dom"



function Files({title, message, link, name, children}) {
//     const {id} = useParams();
// async function downloadFile(){
//
//     const token = localStorage.getItem('token');
//     const response = await axios.get(`http://localhost:8080/files/${id}`, {
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//         }
//     });
//     console.log({response});
//
//     downloadFile(response.data);
//     }



    return (
        <>
            <div className="files-container">
                <div className="files-title-container">
                    <h1 className="file-title">{title}</h1>
                </div>
                <div className="uploaded-by">
                    <p> Geupload door: {name}</p>
                </div>
                <div className="message-container">
                    <p className="file-message">{message}</p>
                </div>
                <div className="button-container">
                    <a className="link-to-details" href={link}  target="_blank">{children}</a>
                </div>
                {/*<button onClick={downloadFile}>download</button>*/}
            </div>
        </>
    );

}

export default Files;