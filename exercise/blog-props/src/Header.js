import React from "react"
// import { url } from "inspector";


const Header = () => {
    return (
            <header className="master-header" style={{backgroundImage: `url(https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg)`}}>
                <div class="overlay"></div>
                <div className="header-div" >
    
                        <h3 className="boot">Start Bootstrap</h3>
                    
                
                    
                   
                    <div className="menu-div">
                        <a href="#">HOME</a>
                        <a href="#">ABOUT</a>
                        <a href="#">SAMPLE POST</a>
                        <a href="#">CONTACT</a>

                    </div>
                    <div className="title-div">
                        <h1>Clean Blog</h1>
                        <h4>A Blog Theme by Start Bootstrap</h4>

                    </div>
                
                
                </div>

            </header>
    )

}








export default Header

//style={{backgroundImage: `url(https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg)`}}