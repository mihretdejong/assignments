import React, { Component} from 'react'
import BabyGrowthForm from './BabyGrowthForm.js'



class BabyGrowthChart extends Component{
    constructor(){
        super()
        this.state = ({
            height: "",
            weight: "",
            headCircumrance: "",

        })
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value})
    }
    handleSumit = ( e ) => {
        e.preventDefault()
        

    }
    render(){
        return(
            <div>
                <BabyGrowthForm
                    {...this.state}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}

                    />

            </div>
        )
    }
}













export default BabyGrowthChart