import axios from 'axios';
import React, { useState } from 'react'
import './CreatePost.css'
import {useNavigate} from 'react-router-dom'

function CreatePost() {
    const [cpost,setcpost] = useState({});
    const navigate=useNavigate();
    const updateHandler=(e)=>{
        e.preventDefault();
        const data=new FormData();
        data.append('title',cpost.title);
        data.append('slug',cpost.slug);
        data.append('body',cpost.body);
        data.append('image',cpost.image);

        axios.post('/posts',data)
        .then(res=>{
            if(res.status===200) {
                alert('post added!!')
                navigate('/',{replace:true})
            }
        })
        .catch(err=>{
            console.log(err)
        })

    }
    console.log(cpost);
    return (
    <div className="container d-flex flex-column mt-3">
    <h2>Create post</h2>
    <form>
        <div className="mb-3 mt-3">
        <label htmlFor="title">Title</label>
        <input onChange={e=>{setcpost({...cpost,title:e.target.value})}} type="title" className="form-control" id="title" placeholder="Enter title" name="email" />
        <label htmlFor="text">slug</label>
        <input onChange={e=>{setcpost({...cpost,slug:e.target.value})}} type="text" className="form-control" id="slug" placeholder="Enter slug" name="slug" />
        <label htmlFor="body">body</label>
        <textarea onChange={e=>{setcpost({...cpost,body:e.target.value})}} className='form-control' id="body" name="body" rows="4" cols="50" />
        <label htmlFor="file">image</label>
        <input onChange={e=>{setcpost({...cpost,image:e.target.files[0]})}} type="file" className="form-control" id="image" placeholder="image" name="image" />
        </div>
        <button onClick={e=>{updateHandler(e)}} type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    )
}

export default CreatePost
