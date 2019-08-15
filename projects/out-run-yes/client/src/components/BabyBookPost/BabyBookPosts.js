import React from 'react'
import { withUser } from '../../context/UserProvider.js'

// import BabyMappedPost from './BabyMappedPost.js'
const BabyBookPosts = (props) => {

    console.log(props)
    const { babies, babyID, deleteBabysPost } = props
    const currentBaby = babies.find(baby => baby._id === babyID)
    return(
        <div>
             {currentBaby && currentBaby.posts.map(post => 
                        <div className="post-div" key={post._id}>
                                <div className="post-img-div" style={{backgroundImage: `url(${post.img})`}}/> 
                                <p>{post.imgCaption}</p>
                                <button onClick={ () =>  deleteBabysPost(babyID, post._id)} >Delete Post</button>                      
                       </div>).reverse()} 
        </div>
    )
}


export default withUser(BabyBookPosts)