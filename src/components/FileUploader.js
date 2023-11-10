import React, {useEffect,useState} from 'react';
import axios from "axios";

function FileUploader(){
    const [selectedFile, setSelectedFile] = useState();
    const [message, setMessage] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [filePicked, setFilePicked] = useState(false);
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);
    const [protectedData, setProtectedData] = useState([]);

    const changeHandler = (event) => {
        const file = event.target.files[0];
        const allowedExtensions = /(\.mp3)$/i;

        if (allowedExtensions.test(file.name)) {
            setSelectedFile(file);
            setFilePicked(true);
        } else {
            setSelectedFile(null);
            alert('Alleen mp3 bestanden zijn toegestaan.');
        }
    };

    useEffect(() => {
        async function getProtectedData() {
            setError('');
            try {
                // haal de token op uit de local storage
                const token = localStorage.getItem('token');

                // haal de protected data op met de token meegestuurd ('http://localhost:8080/api/user')
                const response = await axios.get('http://localhost:8080/api/user', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                console.log({response});
                // zet deze data in de state zodat we dit in het component kunnen laten zien
                setProtectedData(response.data);
                console.log(protectedData);
            } catch(e) {
                setError('Er is iets misgegaan bij het ophalen van de data')
            }
        }

        getProtectedData();
    }, []);

    async function onSubmit(event) {
        toggleLoading(true);
        setError('');
        event.preventDefault();


            try {
                const token = localStorage.getItem('token');

                // if (!selectedFile) {
                //     setError('Please select a file.');
                //     toggleLoading(false);
                //     return;
                // }

                const formData = new FormData();
                formData.append('file', selectedFile,selectedFile.name)
                formData.append('message',message)
                formData.append('name',name,)
                formData.append('email',email)

                // const response = await axios.post('http://localhost:8080/files/',formData
                const response = await axios.post('http://localhost:8080/files/uploads',formData
                ,{headers: {
                       'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },

                });
                if (response.status === 201) {
                    response.statusText("Uploaden is voltooid!")

                } else {

                }

                console.log(response.data);
            } catch(e) {
                // Gaat het mis? Log het in de console!
                console.error(e);
                setError('uploaden is mislukt');
            }
        toggleLoading(false);

    }
    return(
        <div>
            <form>
            <input type="file" name="file-upload"  accept="audio/mp3"onChange={changeHandler}/>
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
                <div className="form-item">
                    <label className="form-title">Comment</label>
                    <textarea className="form-input-comment"
                              name="comment"
                              rows="6"
                              value={message}
                              required
                              onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
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