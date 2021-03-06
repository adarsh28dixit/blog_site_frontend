import { BLOG_DETAILS_FAIL, BLOG_DETAILS_REQUEST, BLOG_DETAILS_SUCCESS, BLOG_LIST_FAIL, BLOG_LIST_REQUEST, BLOG_LIST_SUCCESS } from "../constants/blogListConstant";


export  const blogListReducer = (state = {blog: []}, action) => {
    switch(action.type){
        case BLOG_LIST_REQUEST:
            return {loading: true, blog: []}
        case BLOG_LIST_SUCCESS:
            return {loadig: false, blog: action.payload}
        case BLOG_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

export  const blogDetailsReducer = (state = {loading: true}, action) => {
    switch(action.type){
        case BLOG_DETAILS_REQUEST:
            return {loading: true};
        case BLOG_DETAILS_SUCCESS:
            return {loadig: false, blog: action.payload};
        case BLOG_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}