import React from 'react'
import { Link } from 'react-router-dom'

// import BabyBook from './component/BabyBook/BabyBook.js'


const BabyProfile = props => {
    console.log("test" ,props)
    const { _id, posts, name, babyProImg} = props.location.state
    //  const { _id, posts, name, babyProImg} = props
    
    return(
        <div className="profile-page">
            <div className="baby-pro-img" style={{backgroundImage: `url(${babyProImg})`}}></div>
            <h1>{name}</h1>
            {/* <h1>{_id}</h1> */}
            <div className="baby-prof-links">               
               
                {/* <Link to={{pathname: "/addpost", state: props.location.state}} /> */}
                <Link to={{pathname: "/addpost", state: {babyID: props.location.state._id}}}> bBook</Link>
                <Link to={{pathname: "/addinputoutput", state: {...props.location.state}}}> bBio</Link>
                <Link to={{pathname: "/addgrowthchart", state: {...props.location.state}}}> bGrowth</Link>
            </div>
        </div>
    )
}



export default BabyProfile