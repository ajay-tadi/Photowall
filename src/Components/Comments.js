import { useDispatch, useSelector } from "react-redux";
import DetailComments from "./DetailComments";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { addComment, addLike } from "../Redux/Action";

const Comments = (props) =>{

    const postID  = useParams();
    const posts = useSelector((state)=>state.postReducer);
    const postData = posts.filter((post)=> post.id==postID.id);
    const {id,description,imageLink,liked, comments} = postData[0];
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const [comment, setComment] = useState('');
    const [like, setLike] = useState(liked);


    const onSubmitComment = () =>{
        const data = {
            id:id,
            comment:comment
        }
        dispatch(addComment(data));
        setComment("");
    }
    const onToggleLike = () =>{
        
        setLike(!like)
        
        const data = {
            id:id,
            liked:like
        }


        dispatch(addLike(data));
    }
    

    

    
    return (
        <>
            <div >
                <div  className="commentsContainer">               
                    <div>
                        <img className="commentsPhoto" src={imageLink}  alt={description} />
                    </div>
                    <div className="commentsViewContainer">
                        {
                            comments.map((comment)=> <DetailComments comment={comment} />)
                        }
                        
                        <div style={{display:"flex",width:"100%", alignItems:"center"}}>
                            <input className="detailCommentInput" type="text" onChange={(e)=> setComment(e.target.value)} value={comment}/>
                            <button className="detailCommentButton" onClick={onSubmitComment}/>
                        </div>
                    </div>
                </div>

                <div style={{display:"flex", justifyContent:"space-evenly",alignItems:'center'}}>
                    <div className ={like ? 'likedIcon':'likeIcon' } onClick={onToggleLike} ></div>
                    <div style={{display:"flex", alignItems:'center' }}>
                        <div className = "commentsIcon"></div>
                        <div>{comments.length}</div>
                    </div>
                    <button style={{maxWidth :'100px', color:"blue"}} onClick={()=>navigate('/')} >Back</button>
                </div>
            </div>
        </>
    )
}


export default Comments ;