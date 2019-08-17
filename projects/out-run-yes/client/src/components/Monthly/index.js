import React, { Component } from 'react'
import MonthlyBookForm from './MonthlyBookForm.js'
import { withUser } from '../../context/UserProvider.js'




class Monthly extends Component{
    constructor(){
        super()
        this.state = ({
            ageInMonths: ""

        })
    }
    componentDidMount(){

    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value})

    }
    getBabysPostByMonth = () => {

        
    }
    
    


    render(){
        // const { posts: [posts] } = this.props.babies
        // const { posts: [baby] } = this.props
        const posts = this.props.babies
        
        // const mappedPosts = baby.posts.map(baby =>  )
        // console.log(this.props.babies)
        return(
            <div>
                
                <MonthlyBookForm
                     postsForMonth={posts} 
                    />

            </div>
        )
    }
}






export default withUser(Monthly)