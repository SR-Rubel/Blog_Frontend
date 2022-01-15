import React, { useEffect,useState } from 'react'
import PostCard from '../component/PostCard'
import './Blog.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Blog() {

  const [post, setPost] = useState();
  useEffect(async()=>{
    await axios.get('/posts')
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
    <div className="header">
        <h2>NameSpace It</h2>
        <h1>Rubel Hossain</h1>
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
