import React from 'react'
import FileUploader from "../components/FileUploader";
import {useAuthState} from "../context/AuthContext";
import './Upload.modules.css'

function Upload(){
    const { user } = useAuthState();

    return(
        <>
            <div className='upload-container'>
                <div className='upload-screen'>
                    <div className='upload-title'>
                <h1>Upload DEMO</h1>
                    </div>
                </div>

                        <FileUploader/>
            </div>




        </>

    );
}

export default Upload;