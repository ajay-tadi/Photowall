import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



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
    
    const handleSubmit = (event)=> {
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
            dispatch({type:"ADDPHOTO",payload:post})
            navigate('/')
        }

    }

    const onDisableElement = (event) => {
        console.log(event.target);
        const LinkEl = event.target.name === 'link' && event.target.value 
        const FileEl = event.target.name === 'file' && event.target.value 
        console.log(LinkEl,FileEl);
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