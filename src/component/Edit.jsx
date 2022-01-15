import React, { useState } from 'react'

function Edit() {
    const [e_post,setE_post] = useState({});
    const updateHandler=(e)=>{
        e.preventDefault();

    }
    console.log(e_post);
    return (
    <div className="container d-flex flex-column mt-3">
    <h2>Edit post</h2>
    <form>
        <div className="mb-3 mt-3">
        <label htmlFor="title">Title</label>
        <input onChange={e=>{setE_post({...e_post,title:e.target.value})}} type="title" className="form-control" id="title" placeholder="Enter email" name="email" />
        <label htmlFor="text">slug</label>
        <input onChange={e=>{setE_post({...e_post,slug:e.target.value})}} type="text" className="form-control" id="slug" placeholder="Enter slug" name="slug" />
        <label htmlFor="body">body</label>
        <textarea onChange={e=>{setE_post({...e_post,body:e.target.value})}} className='form-control' id="body" name="body" rows="4" cols="50" />
        <label htmlFor="file">image</label>
        <input onChange={e=>{setE_post({...e_post,image:e.target.files[0]})}} type="file" className="form-control" id="image" placeholder="image" name="image" />
        </div>
        <button onClick={e=>{updateHandler(e)}} type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    )
}

export default Edit
