import React, { Component} from 'react'
import BabyPostForm from './BabyPostForm.js'
import BabyBookPosts from '../BabyBookPosts.js'



class BabyPost extends Component{
    constructor(){
        super()
        this.state = ({
            img: "",
            imgCaption: ""
        })
    }
    componentDidMount(){
        this.props.getUserBabies()
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name] : value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // const _id = props.location.state._id
        const { _id } = this.props.location.state
        const newPostObj = {
            post:{
                img: this.state.img,
                imgCaption: this.state.imgCaption
            } 
        }
        console.log(this.props)
        //pass the function, the id of the baby from this.props
        this.props.addBabyPosts(_id, newPostObj)
        this.setState({img: "", imgCaption: ""})
    }

    render(){
        //{/* babies={this.props.babies} */}
        // do a dot find, to find the id of the baby in babies [] that matches the 
        // id in the this.props.location and pass it to the BabyBookPosts
        // const { babies, babyPosts } = this.props
        console.log(this.props)
        // console.log(this.props.location.state)
        return(
            <div>
                <BabyPostForm
                    {...this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}

                    />
                {/* <BabyBookPosts
                    
                 indBabyInfo={this.props.location.state}
                    /> */}
                <div>

                    
                </div>
              
                
            </div>
        )
    }
}


export default BabyPost