import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const AddPhoto = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
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

 
        return (
    <div>
        <h1> Photowall </h1>
        <div className="form">
          <form onSubmit={handleSubmit}> 
               <input type ="text" placeholder="Link" name="link"/>
               <input type ="text" placeholder="Desciption" name="description"/>
               <input type="file" onChange={handleImageChange} />
               
               <button> Post </button>
          </form>
        </div>
    </div>
    )
    
}



export default AddPhoto