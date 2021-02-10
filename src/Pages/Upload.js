import React from 'react'
import FileUploader from "../components/FileUploader";
import {useAuthState} from "../context/AuthContext";

function Upload(){
    const { user } = useAuthState();

    return(
        <>
        <h1>dit is de upload pagina</h1>

            <h1>Welkom</h1>

        <FileUploader/>
        </>

    );
}

export default Upload;