import React from 'react'


const About = () => {
    return(
        <div className="about-div">
            
                <div className="prof-img-div"></div>
                <div className="enjoy-div">
                    <h1>I enjoy:</h1>
                    <h5>Challenging myself by building web apps </h5>
                    <h5>Learning all things react.js...</h5>
                    <h5>Designing web pages</h5>
                    <h5>Growing my photography business</h5>
                    <h5>Running marathons when I'm not coding...</h5>
                    {/* <a href={require('../images/MihretDeJongWebDeveloperJPEG.jpg')} download/> */}

                   <a href={require('../images/MihretDeJongWebDeveloperJPEG.jpg')} download> <div className="resume-div">Checkout my resume</div> </a>
                </div>

        </div>
    )
}


export default About