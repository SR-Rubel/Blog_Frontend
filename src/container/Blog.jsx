import React from 'react'
import PostCard from '../component/PostCard'
import './Blog.css'

function Blog() {
    return (
    <>
    <div className="header">
        <h2>NameSpace It</h2>
      </div>
      
      <div className="row">
        <div className="leftcolumn">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
        {/* <div className="rightcolumn">
          <div className="card">
            <h2>About Me</h2>
            <div className="fakeimg" style="height:100px;">Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          </div>
          <div className="card">
            <h3>Popular Post</h3>
            <div className="fakeimg">Image</div><br>
            <div className="fakeimg">Image</div><br>
            <div className="fakeimg">Image</div>
          </div>
          <div className="card">
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
        </div> */}
      </div>
      
      <div className="footer">
        <h2>Footer</h2>
    </div>
    </>
    )
}

export default Blog
