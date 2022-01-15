import React, { useEffect,useState } from 'react'
import PostCard from '../component/PostCard'
import './Blog.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Blog() {

  const [post, setPost] = useState();
  useEffect( ()=>{
    axios.get('/posts')
          .then(response=>{
            const res=response.data.data
            setPost(res.data)
            console.log(response);
          })
          .catch(error=>{
            console.log(error);
          })

  },[])

    return (
    <>
    <div className="header d-flex justify-content-between">
        <h2>NameSpace It</h2>
        <Link to='/create'>Create new post</Link>

        <h6> Rubel Hossain</h6>
      </div>
      
      <div className="row">
        <div className="leftcolumn">
          {
            post?.map(item=>{
              return <Link key={item.id} to={"post/"+item.id}>
                <PostCard
                    
                    title={item.title}
                    body={item.body}
                    date={item.created_at}
                    thrumbnail={item.thrumbnail}
                  />
              </Link>
            })
          }
        </div>
      </div>
      
      <div className="footer">
        <h2>Footer</h2>
    </div>
    </>
    )
}

export default Blog
