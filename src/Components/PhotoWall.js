import React, { useEffect } from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux'
import { db } from '../firebase/firebase-config'
import { collection, getDocs } from 'firebase/firestore'

 
function PhotoWall(props) {
    
    const dispatch = useDispatch()

    const photoDataRef = collection(db, "postsData");
    
    useEffect(()=>{
        const getPostData = async ()=>{
            const data = await getDocs(photoDataRef);
            const filteredData = data.docs.map((doc)=>({
                ...doc.data(),
                id:doc.id,
            }));
            
            filteredData.map((item)=> {
                const post = {
                    id: item.id,
                    description: item.description,
                    imageLink: item.imageLink,
                    liked:item.liked,
                    comments:item.comments
                }
                dispatch({type:"ADDPHOTO",payload:post})
            })
            
            
        }
        getPostData()
    },[])

    

    

    const posts  = useSelector(state => state.postReducer);

    

    return  <div>   
             <Link className = "addIcon" to="/AddPhoto"> </Link> 
             <div className="photoGrid" >
                  {posts
                    .sort(function(x,y) {
                        return  y.id - x.id
                    })
                    .map((post, index) => 

                    <Photo key={index} post={post} />

                    )}
             </div>
        </div>
}




 export default PhotoWall