import React, {useState} from 'react';
import axios from "axios";

function FileUploader(){
    const [demoname, setDemoname] = useState('');
    const [demotype, setDemotype] = useState('');
    const [demodata, setdemodata] = useState('');


    const [selectedFile, setSelectedFile] = useState();
    const [filePicked, setFilePicked] = useState(false);
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);

    const changeHandler = (e) => {
        setSelectedFile(e.target.files[0]);
        setFilePicked(true);
    };


    //post het bestand naar de database//
    // const handleSubmission = () => {
    //     // hier de formule voor axios post//
    // };

    async function onSubmit(event) {
        toggleLoading(true);
            setError('');
            // Als je react-hook-form gebruikt hoeft dit niet, dat gebeurt dan automatisch
            event.preventDefault();

            try {
                const token = localStorage.getItem('token');

                const response = await axios.post('http://localhost:8080/upload', {
                    demoname,
                    demotype,
                    demodata,
                },{headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log(response.data);
            } catch(e) {
                // Gaat het mis? Log het in de console!
                console.error(e);
                setError('uploaden is mislukt');
            }
        toggleLoading(false);

    }

    // configuratie voor multipartfile in form hieronder
    return(
        <div>
            <form method="POST" encType="multipart/form-data" action="/">
            <input type="file" name="file" onChange={changeHandler}/>
            {selectedFile ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    {/*<p>*/}
                    {/*    lastModifiedDate:{' '}*/}
                    {/*    {selectedFile.lastModifiedDate.toLocaleDateString()}*/}
                    {/*</p>*/}
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}
            <div>
                <button type="button" onClick={onSubmit}>Submit</button>
                {error && <p>{error}</p>}
            </div>
            </form>
        </div>
    )
}

export default FileUploader;





// import styled from 'styled-components';
// // Style the Button component
// const Button = styled.button`
//   /* Insert your favorite CSS code to style a button */
// `;
// const FileUploader = props => {
//     // Create a reference to the hidden file input element
//     const fileInput = React.useRef(null);
//
//     // Programatically click the hidden file input element
//     // when the Button component is clicked
//     const handleClick = event => {
//         fileInput.current.click();
//     };
//     // Call a function (passed as a prop from the parent component)
//     // to handle the user-selected file
//     const handleChange = event => {
//         const fileUploaded = event.target.files[0];
//         props.handleFile(fileUploaded);
//     };
//     return (
//         <>
//             <button
//                 type="button"
//                 onClick={handleClick}
//             >
//                 Upload a file
//             </button>
//             <input
//                 type="file"
//                 ref={fileInput}
//                 onChange={handleChange}
//                 style={{display: 'none'}} /* Make the file input element invisible */
//             />
//         </>
//     );
// }
//     export default FileUploader;