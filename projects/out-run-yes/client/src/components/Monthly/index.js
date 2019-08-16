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
        console.log(this.props)
        return(
            <div>
                
                <MonthlyBookForm/>

            </div>
        )
    }
}






export default withUser(Monthly)