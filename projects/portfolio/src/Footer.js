import React from 'react'
import './style/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () =>{
    return(
        <div className="footer-container-div">
            <div className="footer-div">
                    <div className="linkedin=">
                      <a href=""> <FontAwesomeIcon icon={faLinkedin} /> </a>
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
            <div></div>
            <div></div>
            <div>
                <h2> Mihret De Jong</h2>
            </div>
        </div>
    )
}






export default Footer