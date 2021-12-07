import axios from '../axios'
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS ,USER_LOGOUT} from '../constants/userConstant';

export const signin = (email, password) => async (dispatch) => {
    dispatch({
        type: USER_LOGIN_REQUEST, payload: { email, password }
    });
    try {
        const { data } = await axios.post('/api/login', { email, password });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: 'Invalid email or password'
        })
    }
};

export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    
    dispatch({ type: USER_LOGOUT });
    document.location.href = '/login';
  };