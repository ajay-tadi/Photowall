import { addCommentType, addLikeType, addPhotoType, removePhotoType } from "./ActionTypes"


export const addPhoto = (payload) =>{
    return {type:addPhotoType ,payload:payload}
}
export const removePhoto = (payload) =>{
    return {type:removePhotoType ,payload:payload}
}
export const addComment = (payload) =>{
    return {type:addCommentType ,payload:payload}
}
export const addLike = (payload) =>{
    return {type:addLikeType ,payload:payload}
}
