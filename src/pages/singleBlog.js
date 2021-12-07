import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { blogDetails } from '../actions/blogListAction'
import {useNavigate, useParams} from 'react-router-dom'


function SingleBlog() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const params = useParams();
    const   {id: productId } = params;
    
    const detailsBlog = useSelector(state => state.detailsBlog);
    const {blog} = detailsBlog;

    useEffect(() => {
        dispatch(blogDetails(productId));
    },[dispatch, productId])
    console.log(blog)
    
    const handleClick = () => {
        navigate("/addblog")
    }

    return (
        <>
            <div className="container">
               
                        <div className="well" >
                            <div className="media">
                                <Link className="pull-left" to="#">
                                    <img className="media-object" src="http://placekitten.com/150/150" alt="" />
                                </Link>
                                <div className="media-body">
                                     <h4 className="media-heading">asdfg</h4>
                                    <p className="text-right">By sdfg</p>
                                    <p>asdfghjk.</p>
                                    <ul className="list-inline list-unstyled">
                                        <li><span><i className="glyphicon glyphicon-calendar"></i> 2 days, 8 hours </span></li>
                                        <li>|</li>
                                        <span><i className="glyphicon glyphicon-comment"></i> 2 comments</span>
                                        <li>|</li>
                                        <li>
                                            <span className="glyphicon glyphicon-star"></span>
                                            <span className="glyphicon glyphicon-star"></span>
                                            <span className="glyphicon glyphicon-star"></span>
                                            <span className="glyphicon glyphicon-star"></span>
                                            <span className="glyphicon glyphicon-star-empty"></span>
                                        </li>
                                        <li>|</li>
                                        <li>

                                            <span><i className="fa fa-facebook-square"></i></span>
                                            <span><i className="fa fa-twitter-square"></i></span>
                                            <span><i className="fa fa-google-plus-square"></i></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    


            
            <div className="btn btn-lg btn-primary" onClick={handleClick}>
                <span className="glyphicon glyphicon-plus"></span> Create new</div>
            </div>
            </>
            )
}

            export default SingleBlog
