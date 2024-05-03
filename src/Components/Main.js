import React, { useState} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route, Routes, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Comments from './Comments'
import Login from './Login and Signup/Login'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase-config'
import AddFileInput from './AddFileInput'


const Main = () => {
    const navigate = useNavigate()
    
    const posts  = useSelector(state => state.postReducer);
    const dispatch = useDispatch()
    // console.log(posts);
    function removePhoto(postRemoved) {
        dispatch({
            type: 'REMOVE', payload:postRemoved
          })
    }

        const onLogout = async() =>{
            await signOut(auth);
            navigate('/login')
        }
        
        return ( 
        
        <Routes >
            <Route exact path = "/" element={ (
                 <div>
                    <div className='parent'>
                        <div className='centered' ><Title  title={'Photowall'}/></div>
                        <div className='aligned-end' onClick={onLogout} ><button >Log out</button></div>
                        
                    </div>
                      
                      <PhotoWall />
                 </div>

            )}/> 

            <Route path= "/photo/:id" element = {<Comments  />} />
            <Route path= "/AddPhoto" element = {<AddPhoto  />} />
            <Route path= "/login" element = {<Login />} />
            <Route path= "/file" element = {<AddFileInput />} />
         </Routes>
        )
        
    

}


export default Main