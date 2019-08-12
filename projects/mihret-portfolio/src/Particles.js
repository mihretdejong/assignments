import React, { Component } from 'react'
import Particles from 'react-particles-js'


const particleOpt = {
    particles: {
        number: {
            // value: 10
            
        }
    }
}

class ParticlesComp extends Component{
    render(){
        return(
            <div>
                 <Particles 
                    params={particleOpt}
                     />
    
            </div>
        )
    }
} 
    



export default ParticlesComp