import React, { Component} from 'react'

const BabyContext = React.createContext()

class BabyProvider extends Component{
    constructor(){
        super()
        this.state = {
            babies: []

        }
    }
    //what method goes in here is what is built in the babyRouter because these methods will have to update the state
    getAllBabies = () => {
        axios.get("/baby")
    }
    render(){
        return
        <BabyContext.Provider
            value={{

            }}>

            {this.props.children}
        </BabyContext.Provider>
    }

}

export default BabyProvider
