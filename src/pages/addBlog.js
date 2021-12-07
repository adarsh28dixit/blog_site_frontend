import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddBlog() {
    const [input, setInput] = useState({
        title:"", author: "", description: ""
    })
    const navigate = useNavigate();

    const handleInput = (e) => {
        const{name, value} = e.target;
        setInput({
            ...input,
            [name]: value
        })
    }

    const handleCreate = (e) => {
        e.preventDefault();
        const newData = {
            title: input.title,
            author: input.author,
            description: input.description,
        }
        axios.post('http://localhost:5000/api/blog', newData)
        alert("Successfully created...")
        navigate("/blog")
    }

    return (
        <div>
            <div className="container">
                <form >
                    <label for="fname">Title</label>
                    <input type="text" id="fname" name="title" placeholder="Title.."
                    value={input.title} onChange={handleInput}/>

                    <label for="lname">Author</label>
                    <input type="text" id="lname" name="author" placeholder="Author.." 
                    value={input.author} onChange={handleInput}/>



                    <label for="subject">Description</label>
                    <textarea type="text" id="lname" name="description" placeholder="Writing something.." style={{height: "200px"}} 
                    value={input.subject} onChange={handleInput}/>


                    <input onClick={handleCreate} type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default AddBlog
