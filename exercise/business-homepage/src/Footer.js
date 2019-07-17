import React from 'react'
import { Link} from 'react-router-dom'

function Footer(){
    return(
        <div className="footerDiv">
           
                
                    <div className="nav-footer">
                        <Link to="/">HOME</Link>
                        <Link to="/about">ABOUT</Link>
                        <Link to="/about">GALLERY</Link>
                        <Link to="/contact">CONTACT</Link>
                    </div>
                    <div className="socialMDiv">
                        <a href="http://www.google.com">
                            <img src="https://image.flaticon.com/icons/svg/1384/1384005.svg" className="socialMTag"/>
                        </a>
                     
                        <a href="https://www.instagram.com/mdtimelesspictures/?hl=en" src="https://image.flaticon.com/icons/svg/69/69366.svg">
                            <img src="https://image.flaticon.com/icons/svg/69/69366.svg" className="socialMTag"/>
                        </a>
                        <a href="https://twitter.com/" src="https://image.flaticon.com/icons/svg/69/69366.svg">
                            <img src="https://image.flaticon.com/icons/svg/69/69480.svg" className="socialMTag"/>
                        </a>
                        

                    </div>
                
                
        </div>
    )
}

export default Footer