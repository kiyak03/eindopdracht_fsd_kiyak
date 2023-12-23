import React from "react";

function Files({title, message, link, name, children}) {

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