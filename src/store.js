import {combineReducers, compose, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { blogDetailsReducer, blogListReducer } from './reducers/blogListReducer';
import { userLoginReducer } from './reducers/userReducer';

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
    userSignin: { userInfo: userInfoFromStorage },
};

const reducer = combineReducers({
    listBlog : blogListReducer,
    detailsBlog : blogDetailsReducer,
    userSignin : userLoginReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store;