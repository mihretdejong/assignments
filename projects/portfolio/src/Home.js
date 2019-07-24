import React from 'react'
import ReactSvg from './svgIcons/ReactSvg.js'
import CssSvg from './svgIcons/CssSvg.js'
import AdobeLRSvg from './svgIcons/AdobeLRSvg.js'
import JSSvg from './svgIcons/JSSvg.js'
import NodeJsSvg from './svgIcons/NodeJsSvg.js'
import HtmlSvg from './svgIcons/HtmlSvg.js'
import GithubSvg from './svgIcons/GithubSvg.js'
import MongoDBSvg from './svgIcons/MongoDBSvg.js'


const Home = () => {
    return (
        <div className="home-container" >
            <div className="home">
                <div className="name-div">
                    <h1> Hello, </h1>
                    <h3>I'm Mihret De Jong </h3>
                    <hr></hr>
                </div>
                <div className="moi-div">
                    
                    <p>I'm a:</p>
                    <hr></hr>
                    
                </div>
                <div className="describe-div">
                    <h5>Full-stack developer</h5>
                    <h5>Life time learner</h5>
                    <h5>Triathlon enthusiast</h5>
                    <h5>Photographer</h5>
                    <h5>Marathoner</h5>
                </div>

            </div>
            
            <div className="skills-div">
                <div>
                    <h3>Skills</h3>
                </div>
                <MongoDBSvg/>
                <JSSvg/>
                <ReactSvg/>
                <CssSvg/>
                <NodeJsSvg/>
                <HtmlSvg/>
                <GithubSvg/>

            </div>
            <div className="home-projects-overview">
                <div className="home-css-zen"></div>
                <div className="home-trivia"></div>
                <div className="home-business"></div>

            </div>

        </div>

    )
}


export default Home