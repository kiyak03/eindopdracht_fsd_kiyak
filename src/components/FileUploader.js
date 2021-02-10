import React, {useState} from 'react';

function FileUploader(){
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };


    //post het bestand naar de database//
    const handleSubmission = () => {
        // hier de formule voor axios post//
    };

    return(
        <div>
            <input type="file" name="file" onChange={changeHandler} />
            {selectedFile ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate:{' '}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}
            <div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
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