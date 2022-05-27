import React, { useState, useContext} from 'react'
import firebase from '../../firebase';
import { ref } from "firebase/storage";

const InputFile = ( {setUrlImage, setFile}) => {

 
    const onChange = async (e) => {
    
        const file = e.target.files[0]; // acceder al file subido con el input

        // Create a reference to 'file.name'
        const storageRef =  ref(firebase.storage, file.name);

        // asignar el nombre del archivo en el storage de firebase
        const fileRef = ref(firebase.storage, `images/${file.name}`);
 
        // While the file names are the same, the references point to different files

        setUrlImage(storageRef.fullPath);
        setFile(e.target.files[0])

    };
    
    
    // Asi debe estar el input tipo file 
    
    return (
     <input
        accept="image/*"
        onChange={onChange}
        type="file"
        id="image"
        name="image"
     />
    )
}

export default InputFile