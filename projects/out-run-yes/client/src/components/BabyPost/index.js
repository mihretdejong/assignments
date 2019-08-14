import React, { Component} from 'react'
import BabyPostForm from './BabyPostForm.js'
import BabyBookPosts from '../BabyBookPost/BabyBookPosts.js'



class BabyPost extends Component{
    constructor(){
        super()
        this.state = ({
            img: "",
            imgCaption: ""
        })
    }
  
    

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name] : value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // const _id = props.location.state._id
        const { babyID } = this.props.location.state
        const newPostObj = {
            post:{
                img: this.state.img,
                imgCaption: this.state.imgCaption
            } 
        }
        console.log(this.props)
        //pass the function, the id of the baby from this.props
        this.props.addBabyPosts(babyID, newPostObj)
        this.setState({img: "", imgCaption: ""})
    }
    // deleteBabysPost = () => {
        
    //     this.props.deleteBabysPost(_id)
       
    // }

    render(){
        //{/* babies={this.props.babies} */}
        // do a dot find, to find the id of the baby in babies [] that matches the 
        // id in the this.props.location and pass it to the BabyBookPosts
        // const { babies, babyPosts } = this.props
        console.log(this.props)
        // console.log(this.props.location.state)
        return(
            <div>
                
                <BabyBookPosts
                    babyID={this.props.location.state.babyID}
                    indBabyInfo={this.props.location.state}
                
                    
                    />
                <BabyPostForm
                    {...this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}

                    />
           
              
                
            </div>
        )
    }
}


export default BabyPost