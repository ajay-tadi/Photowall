import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPhoto } from '../Redux/Action';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';



const AddPhoto = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [selectedImage, setSelectedImage] = useState(null);
    const [isDisabledLink,setisDisabledLink] = useState(false)
    const [isDisabledFile,setisDisabledFile] = useState(false)

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        setSelectedImage(URL.createObjectURL(file));
        }
    };
    
    const handleSubmit = async (event)=> {
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value

        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink || selectedImage ,
            liked:false,
            comments:[]
        }
        if (description && (imageLink || selectedImage)){
        
            const myCollection = collection(db, 'postsData');
    
            const newDocRef = await addDoc(myCollection, post);
            console.log(newDocRef);

            navigate('/')
        }

    }

    const onDisableElement = (event) => {
      
        const LinkEl = event.target.name === 'link' && event.target.value 
        const FileEl = event.target.name === 'file' && event.target.value 
       
        if (LinkEl){
            setisDisabledFile(true);
            setisDisabledLink(false)
        }else if (FileEl){
            setisDisabledLink(true)
            setisDisabledFile(false);
        }else{
            setisDisabledLink(false)
            setisDisabledFile(false);
        }

    }
 
        return (
    <div>
        <h1> Photowall </h1>
        <div className="form">
          <form onSubmit={handleSubmit} onChange={onDisableElement}> 
               <input type ="text" placeholder="Desciption" name="description"/>
               <input type ="text" placeholder="Link" name="link" disabled={isDisabledLink}  />
               <p>Or</p>
               <input type="file" name='file' onChange={handleImageChange} disabled={isDisabledFile} />
               
               <button> Post </button>
          </form>
        </div>
    </div>
    )
    
}



export default AddPhoto