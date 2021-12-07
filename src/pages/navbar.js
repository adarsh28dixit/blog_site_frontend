import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userAction';

function Navbar() {
    const navigate = useNavigate();

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
   
    const dispatch = useDispatch();

    

    const signOutHandler = () => {
        dispatch(signout());
    }

    const loginHandler = () => {
        navigate("/login")
    }
    return (
        <div>
            <div id="navbar">
            {
                                userInfo ? (


                                    <div className="btn-group">
                                        <button type="button" id="head" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            {userInfo.name}
                                        </button>
                                        <ul className="dropdown-menu">
                                        
                                            <li><Link onClick={signOutHandler} className="dropdown-item" >Sign Out</Link></li>
                                            
                                            
                                        </ul>
                                    </div>
                                ) : (
                                    <button onClick={loginHandler} id="header-btn" className="btn btn-success" type="submit">SignIn</button>

                                )
                            }
                <Link to="#">News</Link>
                <Link to="#">Contact</Link>
                <Link to="#">News</Link>
                <Link to="/blog">Blog</Link>
                
                <Link to="#">Home</Link>
            </div>
        </div>
    )
}

export default Navbar
