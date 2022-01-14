import React from 'react'

function PostCard({title,date,thrumbnail,body}) {
    return (
        <div>
            <div className="card">
                <h2>TITLE HEADING</h2>
                <h5>jan 14, 2022</h5>
                <div className="fakeimg">Image</div>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>
    )
}

export default PostCard
