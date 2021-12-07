import axios from '../axios'
import { BLOG_DETAILS_FAIL, BLOG_DETAILS_REQUEST, BLOG_DETAILS_SUCCESS, BLOG_LIST_FAIL, BLOG_LIST_REQUEST, BLOG_LIST_SUCCESS } from '../constants/blogListConstant'


export const blogList = () => async(dispatch) => {
    try{
        dispatch({type: BLOG_LIST_REQUEST})
        const {data} = await axios.get('/api/blog')
        dispatch({type: BLOG_LIST_SUCCESS, payload: data})
    } catch(error){
        dispatch({type: BLOG_LIST_FAIL, payload: error.message})
    }
}

export const blogDetails = (blogId) => async(dispatch) => {
    dispatch({type: BLOG_DETAILS_REQUEST, payload: blogId})
    try{
        
        const {data} =  await axios.get(`/api/blog/${blogId}`);
        dispatch({type: BLOG_DETAILS_SUCCESS, payload: data})
    } catch(error){
        dispatch({type: BLOG_DETAILS_FAIL, payload: error.message})
    }
}

