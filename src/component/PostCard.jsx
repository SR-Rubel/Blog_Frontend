import React from 'react'

function PostCard({id,title,date,thrumbnail,body}) {
    return (
        <div>
            <div className="card">
                <h2>{title}</h2>
                <h3>post id: {id}</h3>
                <h5>{date}</h5>
                <div className="fakeimg">{thrumbnail}</div>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default PostCard
