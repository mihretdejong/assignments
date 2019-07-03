import React from 'react'
import { Link } from 'react-router-dom'
// import Navbar from './Navbar.js'


const Services = props => {
    console.log(props)
    const mappedServices = props.service.map(service => {
        return(
            <Link to={`/service/${service._id}`} className="service-dis-div" key={service.type} >
                <h1 style={{color: service.color}} >{service.type}</h1>
            </Link>
        )
    })
    return (
        <div className="services"> 
           <div className="service-container">
               {mappedServices}

               <div> </div>
               <div> </div>
               <div> </div>
               <div> </div>


           </div>

        </div>
    )
}






export default Services 