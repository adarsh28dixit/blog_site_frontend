import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { blogList } from '../actions/blogListAction';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Blog() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const listBlog = useSelector(state => state.listBlog)
    const { blog } = listBlog;

    useEffect(() => {
        dispatch(blogList())
    }, [dispatch])
    console.log(blog);

    const handleClick = () => {
        navigate("/addblog")
    }

    return (
        <div>
            <div className="container">
                {
                    blog.map((item) => (
                        <div key={item._id} className="well" >
                            <div className="media">
                                <Link className="pull-left" to="#">
                                    <img className="media-object" src="http://placekitten.com/150/150" alt="" />
                                </Link>
                                <div className="media-body">
                                    <Link to={`/singleblog/${item._id}`}> <h4 className="media-heading">{item.title}</h4></Link>
                                    <p className="text-right">By {item.author}</p>
                                    <p>{item.description}.</p>
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

                    ))
                }


            </div>
            <div className="btn btn-lg btn-primary" onClick={handleClick}>
                <span className="glyphicon glyphicon-plus"></span> Create new</div>
        </div >
    )
}

export default Blog
