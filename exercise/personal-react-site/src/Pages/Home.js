import React from 'react'
import '../style/home-page.css'




const Home = () => {
    return (
        <div className="home-div">
           
           <div>
               <div className="home-first-img-div">
                    <div className="home-text-element">
                        <div className="home-quote-div"></div>
                        <h2>
                            uTriv  
                            
                        </h2>
                        <p>Trivia Challenge</p>
                    </div>
                </div>
                <div className="home-second-text-div">
                    <p>
                    “I cannot teach anybody anything. I can only make them think” 
                        ― Socrates 
                    </p>
                    <a className="good-reads-btn" href="https://www.goodreads.com/">
                           Good Reads
                    </a>
                

                </div>
                <div className="home-third-img-div">
                    
                    

                </div>
                <div className="briliant-ideas-div">
                    <h2>briliant ideas</h2>
                    <div className="briliant-ideas-img"></div>
                    
                </div>

           </div>
            


    
        </div>
    )
}









export default Home