import React from 'react';
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
function Photo(props) {
    const dispatch = useDispatch()
    const post = props.post;
    console.log(post);
    
    return <figure className="figure"> 
                <img className= "photo" src={post.imageLink} alt={post.description}    />
                <figcaption> <p> {post.description} </p> </figcaption>
                <div className = "button-container">
                    <button onClick = {() => {
                        dispatch({
                            type: 'REMOVE', payload:post
                        })
                    }}> Remove </button>
                <div style={{display:"flex", justifyContent:"space-evenly",alignItems:'center'}}>

                    <Link className = "commentsIcon" to={`photo/${post.id}`}   > </Link> 
                    <div>{post.comments.length}</div>
                </div>
                </div>
         </figure>

}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}


export default Photo
