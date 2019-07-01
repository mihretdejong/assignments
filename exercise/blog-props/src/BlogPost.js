import React from 'react'



const BlogPost = (props) => {
    return (
        <div className="post-column">
            <div className="post-contain">
                <a href="">
                    <h2>{props.title}</h2>
                    <h3>{props.subTitle}</h3>
                </a>
                <p> Posted by {props.author} on {props.date}</p>
                <hr/>

            </div>


        </div>
    )
}







export default BlogPost