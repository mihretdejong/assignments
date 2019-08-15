import React from 'react'
import { withUser } from '../../context/UserProvider.js'

// import BabyMappedPost from './BabyMappedPost.js'
const BabyBookPosts = (props) => {

    // const { getUserBabies } = props
    // useEffect(() => {
    //     getUserBabies()
    // }, [getUserBabies])
      
    console.log(props)
    const { babies, babyID, deleteBabysPost } = props
    const currentBaby = babies.find(baby => baby._id === babyID)
    return(
        <div>
             {currentBaby && currentBaby.posts.map(post => 
                        <div key={post._id}>
                                <div className="post-img-div" style={{backgroundImage: `url(${post.img})`}}/> 
                                <p>{post.imgCaption}</p>
                                <button onClick={ () =>  deleteBabysPost(babyID, post._id)} >delete</button>
                                {/* <button onClick={ () => deleteBabysPost(babyID, post._id)} >delete</button> */}
                        
                        </div>).reverse()} 
        </div>
    )
}


export default withUser(BabyBookPosts)