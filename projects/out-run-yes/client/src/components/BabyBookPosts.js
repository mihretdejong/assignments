import React from 'react'
// import { withUser } from '../context/UserProvider.js'


const BabyBookPosts = (props) => {
   
    console.log(props)
    // const { _id, posts, babyProImg, name  } = props.indBabyInfo
    // console.log(props.indBabyInfo)
    // const mappedPosts = posts.map(post => {
    //     return <div>
    //             <p>{post.img}</p>
    //             <p>{post.imgCaption}</p>
    //         </div>
    // })
    return(
        <div> 
            {/* <div style={{backgroundImage: `url(${babyProImg})`}} className=""></div> */}
            {/* <h1>{name}</h1> */}
            {/* {mappedPosts} */}
        </div>
    )
}






export default BabyBookPosts