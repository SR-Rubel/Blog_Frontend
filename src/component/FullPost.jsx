import axios from 'axios';
import React,{useEffect,useState} from 'react';
import {useNavigate,useParams,Link} from 'react-router-dom'

function FullPost(props) {
    const param=useParams()
    const navigate=useNavigate()
    const [f_post, setF_post] = useState({image:'',title:'',body:''})
    useEffect(() => {
        axios.get('posts/'+param.id)
        .then(response=>{
            setF_post(response.data)
            navigate("/", { replace: true });
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
    }, [param.id,navigate])

    const deleteHandler=(e)=>{
        e.preventDefault();
        axios.delete('/posts/'+param.id)
        .then(response=>{
            console.log(response)

        })
        .catch(error=>{
            console.log(error);
        })
    }
    
    return (
    <>
     <div className="d-flex justify-content-center">
        <div className="card">
            <img src={f_post?.image} className="card-img-top" alt='img'/>
            <div className="card-body">
                <h5 className="card-title">{f_post?.title}</h5>
                <p className="card-text">{f_post?.body}</p>
            </div>
        </div>
    </div> 
    <div className="d-flex justify-content-center">

    <Link to={'/edit/'+param.id} className="btn btn-primary m-2">Edit post</Link>
    <button onClick={e=>deleteHandler(e)} className="btn btn-danger m-2">delete post</button>
    </div>
    </>
    )
}

export default FullPost
