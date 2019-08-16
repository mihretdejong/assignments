import React from 'react'
import { Link } from 'react-router-dom'
import BabyProfileUpdated from '../BabyProfileUpdated'

const BabyProfile = props => {
    // console.log("test" ,props)
    const { deleteBabyEntry } = props
    const { _id } = props.location.state
    let name1 =""
    let babyProImg1 ="https://t3.ftcdn.net/jpg/00/64/67/52/240_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"
    if (props.babies.length > 0 ){
        const currentBaby = props.babies.filter(baby => baby._id === _id)
        const [{ name, babyProImg }] = currentBaby
        name1 = name
        babyProImg1 = babyProImg
        console.log(currentBaby)
    }
    // const [{ name, babyProImg }] = currentBaby


    //  const { _id, posts, name, babyProImg} = props
    
    return(
        <div className="profile-page">
            <div className="baby-pro-img" style={{backgroundImage: `url(${babyProImg1})`}}></div>
            <h1>{name1}</h1>
            <div> 
            </div>
            {/* <h1>{_id}</h1> */}
            <div className="baby-prof-links">               
               
                {/* <Link to={{pathname: "/addpost", state: props.location.state}} /> */}
                <Link to={{pathname: "/addpost", state: {babyID: props.location.state._id}}}> bBook</Link>
                <Link to={{pathname: "/addinputoutput", state: {...props.location.state}}}> bBio</Link>
                <Link to={{pathname: "/addgrowthchart", state: {...props.location.state}}}> bGrowth</Link>
            </div>
            <BabyProfileUpdated
                propsFromProfileId={_id}
                
                />
            <button className="delete-div-profile" onClick={ () => deleteBabyEntry(_id)}>Delete Profile</button>
        </div>
    )
}



export default BabyProfile