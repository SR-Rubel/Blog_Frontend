import React from 'react'

function PostCard({title,date,thrumbnail,body}) {
    return (
        <div>
            <div className="card">
                <h2>{title}</h2>
                <h5>{date}</h5>
                <div className="fakeimg">{thrumbnail}</div>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default PostCard
