import React, { useEffect,useState } from 'react'
import PostCard from '../component/PostCard'
import './Blog.css'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Blog() {

  const [post, setPost] = useState();
  const [page,setPage]=useState(1);
  const [total,setToatl]=useState();
  const navigate=useNavigate();

  

  useEffect( ()=>{
    axios.get('/posts?page='+page)
          .then(response=>{
            const res=response.data.data
            setPost(res.data)
            setToatl(res.last_page)
            console.log(response);
          })
          .catch(error=>{
            if(error.response.status === 401) navigate('/login',{replace:true})
          })

  },[page,navigate])

  const logHandle=(e)=>{
    e.preventDefault();
    if(e.target.innerText=== 'log out'){ 
      axios.get('/logout');
      localStorage.setItem('token','')
      navigate('/login',{replace:true})
    }
    // else{
    // }
  }

    return (
    <>
    <div className="header d-flex justify-content-between">
        <h2>NameSpace It</h2>
        <Link to='/create'>Create new post</Link>

       <h6 onClick={e=>logHandle(e)}>{localStorage.getItem('token') !== ''? 'log out':'login'}</h6> 
      </div>
      
      <div className="row">
        <div className="leftcolumn">
          {
            post?.map(item=>{
              return <Link key={item.id} to={"post/"+item.id}>
                <PostCard
                    id={item.id}
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
      <div className="d-flex justify-content-center">
        <Pagination 
        count={total} page={page} 
        onChange={(e,v)=>setPage(v)}
        color='secondary'

         />
      </div>
      
      <div className="footer">
        <h2>Footer</h2>
    </div>
    </>
    )
}

export default Blog
