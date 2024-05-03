import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {  useSelector } from 'react-redux'


function PhotoWall(props) {
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