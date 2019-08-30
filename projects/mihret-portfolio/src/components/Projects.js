import React from 'react'


const Projects = () => {
    return(
        <div className="projects-div">
            <h1>Featured work:</h1>
            <div className="u-triv">
                <h2>uTriv</h2>

                    <div className="project-discription">
                        <p> > Logic heavy, Single Page Application(SPA) </p>
                        <p> > Built with React, JavaScript, React Router, Node.js </p>
                        <p> > User may choose from 15 categories and 3 difficulty levels </p>

                    </div>
                <div className="proj-utri-img">
                    
                        <a href="https://utriv.surge.sh/"><div className="utriv-snap utriv-home-page"></div></a>
                        <a href="https://utriv.surge.sh/trivia"><div className="utriv-snap utriv-trivia-page"></div></a>
                        <a href="https://utriv.surge.sh/about"><div className="utriv-snap utriv-about-page"></div></a>
                    
                </div>
            </div>
            <div className="instagram-clone-div">
                <h2>Instagram Clone</h2>
                <div className="project-discription">
                        <p> > A full stack(MERN) group project where recreating Instagram was attempted.</p>
                        <p> > User may sign up, post images, add image caption, delete their own post, comment and like other user's post </p>
                        <p> > Built with React, React Browser Router, Node.js, Render Props, JavaScript, MongoDB, Mongoose, Express </p>

                    </div>

                <div className="instagram-clone">
                        <a href="https://ourinsta.herokuapp.com/"><div className="insta-snap insta-signup-page"></div></a>
                        <a href="https://ourinsta.herokuapp.com/feed"><div className="insta-snap insta-home-page"></div></a>
                        <a href="https://ourinsta.herokuapp.com/profile"><div className="insta-snap insat-profile-page"></div></a>  
                </div>
            </div>
           
          
        </div>
     
    )
}


export default Projects 