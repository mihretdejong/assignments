import React from 'react'


const About = () => {
    return(
        <div className="about-div">
            
                <div className="enjoy-div">
                    <div className="resume-wrapper-div">
                         <a href={require('../images/MihretDJFSDevResume81019.jpg')} download> <div className="resume-div">Checkout my resume</div> </a>
                    </div>
                    <div className="prof-img-div">

                    </div>
                    <div className="about-box1"></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className="text-div-about">
                        <h1>I enjoy:</h1>
                        <h5>Challenging myself by learning new technology </h5>
                        <h5>Learning all things react.js...</h5>
                        <h5>Designing web pages</h5>
                        <h5>Growing my photography business</h5>
                        <h5>Running marathons when I'm not coding...</h5>

                    </div>
                    {/* <h5>Running marathons when I'm not coding...</h5> */}
                    {/* <a href={require('../images/MihretDeJongWebDeveloperJPEG.jpg')} download/> */}

                </div>

        </div>
    )
}


export default About