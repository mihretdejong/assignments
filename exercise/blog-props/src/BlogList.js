import React from 'react'
import BlogPost from './BlogPost'


const BlogList = (props) => {
    const theBlogList = [
        {
            title: "Man must explore, and this is exploration at its greatest",
            subTitle: "Problems look mighty small from 150 miles up",
            author: "Start Bootstrap",
            date: "September 24, 2019"
        },{
            title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
            subTitle: "",
            author: "Start Bootstrap",
            date: "eptember 18, 2019"
        },{
            title: "Science has not yet mastered prophecy",
            subTitle: "We predict too much for the next year and yet far too little for the next ten.",
            author: "Start Bootstrap",
            date: "August 24, 2019"
        },{
            title: "Failure is not an option",
            subTitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
            author: "Start Bootstrap",
            date: "July 8, 2019"
        }
    ]
    const listBlogs = theBlogList.map((blogPost, i) => <BlogPost 
                                        title ={blogPost.title}
                                        subTitle ={blogPost.subTitle}
                                        author ={blogPost.author}
                                        date = {blogPost.date} />)
    return (
        <div>
            {listBlogs}
            
        </div>
    )
}




export default BlogList