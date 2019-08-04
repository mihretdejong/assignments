import React from 'react'
import './style/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faHeart } from '@fortawesome/free-brands-svg-icons'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Footer = () =>{
    return(
        <div className="footer-container-div">
            <div className="footer-div">
                    <div className="linkedin=">
                      <a href=""> <FontAwesomeIcon icon={faLinkedin} /> </a>
                    </div>
                    <div>
                      {/* <FontAwesomeIcon icon={faHeart}/> */}
                      {/* <FontAwesomeIcon icon={faHeart}/> */}
                    </div>
                
                    {/* <FontAwesomeIcon icon={faFacebook} />  */}
                    <div className="github="> 
                      <a href=""> <FontAwesomeIcon icon={faTwitter} /> </a>  
                    </div>
                    <div className="twitter=">
                      <a href=""> <FontAwesomeIcon icon={faGithub} /> </a>
                        
                    </div>
                    <div className="instagram=">
                    <a href=""> <FontAwesomeIcon icon={faInstagram} /> </a>

                    </div>           
            </div>
            
            <div>
                <h2> Mihret De Jong: mihret.dejong@gmail.com</h2>
                <h2> (801) 814-3086</h2>
            </div>
        </div>
    )
}






export default Footer