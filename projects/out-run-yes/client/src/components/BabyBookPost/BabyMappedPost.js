import React from 'react'


const BabyMappedPost = (props) => {
    // console.log(props)
    return(
            <div className="mapped-post-div">
               {/* <p>{post.img}</p> */}
               <div className="post-img-div" style={{backgroundImage: `url(${props.img})`}}></div>
                <p>{props.imgCaption}</p>
                <p> {props._id}</p>
                <button>Delete</button>
                 {/* <button>Edit</button> */}
         </div>
    )
}







export default BabyMappedPost