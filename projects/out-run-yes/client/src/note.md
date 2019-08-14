first thing to build the front end 
  // cd into the client folder
  // create-react-app . to create a react app in the client folder
  //install axios and react-router-dom
  // add proxy to the package json
    // "proxy": "http://localhost/7000

//
//
// create a baby using a post request and no propterties except for name
// add baby image posts using a put request (baby img, caption)
// add in




   const { _id, posts, babyProImg, name  } = props.indBabyInfo
    const mappedPosts = posts.map((post, _id) =>  {
                                     <BabyMappedPost 
                                    key={_id} 
                                    {...posts}/> ) 
    
            
        return <div className="mapped-post-div" key={post._id}>
                <p>{post.img}</p> 
                <div className="post-img-div" style={{backgroundImage: `url(${post.img})`}}></div> 
                <p>{post.imgCaption}</p> 
                <button onClick={() => deleteBabysPost(post._id)}>Delete</button> 
                <button>Edit</button> 
            </div> 
    }
    )
    return(
        <div className="babybookpost-div"> 
            <div style={{backgroundImage: `url(${babyProImg})`}} className=""></div> 
            <div className="baby-pro-img post-page" style={{backgroundImage: `url(${babyProImg})`}}></div>
             <h1>{name}</h1> 
            {mappedPosts}
        </div>
    )
}
//
    