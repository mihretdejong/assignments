import React from 'react'



const EachMonth = (props) => {
    console.log(props)
    const { age, postsForMonth } = props.location.state
    const { posts } = postsForMonth[0]
    const filteredPost = posts.filter(post => post.ageInMonths === age)
    // console.log(filteredPost)
    const mappedPost = filteredPost.map(post => {
       return ( <div key={post._id}>
                <h1>{post.imgCaption}</h1>
                <div style={{backgroundImage: `url(${post.img})`}} className="monthly-mapped"></div>
                </div>
       )
    })
    return(
        <div 
            /* className="" */
            >
             {mappedPost}  

        </div>
    )
}






export default EachMonth