import { commonApi } from "./commonApi"
import {serverURL} from "./serverURL"






 export const uploadAllVideo= async(reqBody)=>{
    return await commonApi('POST',`${serverURL}/videos`,reqBody)
}

//get all video from json server

export const getAllVideos= async()=>{

    return await commonApi('GET',`${serverURL}/videos`)
}

// api to delete data

export const deleteVideo=async(id)=>{
    return await commonApi('DELETE',`${serverURL}/videos/${id}`,{})
}

//api to add data to watch history

export const historyVideo= async(reqBody)=>{
    return await commonApi('POST',`${serverURL}/history`,reqBody)
}

//api to get all history from json server
 
export const getAllHistory=async()=>{
    return await commonApi('GET',`${serverURL}/history`,"")
}

//api to get category
export const addCategory=async(body)=>{
    return await commonApi('POST',`${serverURL}/categories`,body)
}


// api to delete history
 export const deleteHistory=async(id)=>{
    return await commonApi('DELETE',`${serverURL}/history/${id}`,{})
 }

 // api to get category
 export const getAllCategory=async()=>{
    return await commonApi('GET',`${serverURL}/categories`,"")
}
// api to delete category
export const deleteCategory=async(id)=>{
    return await commonApi('DELETE',`${serverURL}/categories/${id}`,{})
 }

//api to video pass
export const videoPass=async(id)=>{
    return await commonApi('GET',`${serverURL}/videos/${id}`,"")
}
//api to update category
export const updatecategory=async(id,body)=>{
    return await commonApi('PUT',`${serverURL}/categories/${id}`,body)
}