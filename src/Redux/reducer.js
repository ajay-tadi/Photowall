import { addCommentType, addLikeType, addPhotoType, removePhotoType } from './ActionTypes';
import postsData from './data'

const  postReducer = (state=[], action) => {

    switch (action.type) {
        case removePhotoType:
            return state.filter((post) => post !== action.payload ) ;
        
        case addPhotoType :
            return [...state, action.payload ];

        case addCommentType :
            
            return state.map((post)=>{
                    if (action.payload.id === post.id){
                        const addComment  = post.comments.concat(action.payload.comment)
                        return {
                            ...post, comments:addComment
                        }
                    };
                return post;    
            
            });

        case addLikeType :
            return state.map((post)=>{
                if (action.payload.id === post.id){
                    
                    return {
                        ...post, liked:!action.payload.liked
                    }
                };
            return post;    
        
        });
        

        default:
            return state;
    }

    
}

export default postReducer;