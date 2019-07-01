import React, { Component } from 'react'
import data from './data.json'
import SuperHero from './SuperHero'
import './style.css'


class App extends Component {
    constructor(){
        super()
        this.state = ({
            superHeros: data

        })
    }
   

    handleChange = (catchPhrase) => {
        
             alert(catchPhrase)

        
    }
    




    

    render (){
        console.log(data)
        console.log(this.state.superHeros)

        const mappedHeros = this.state.superHeros.map(hero => {

        return    <SuperHero 
                        name={hero.name} 
                        show={hero.show }
                        catchPhrase={hero.catchPhrase}
                        imageName={hero.imageName}
                        handleChange={this.handleChange}/> 
        })

        return (
            <div>
                {mappedHeros}
                
                
            </div>

        )
    }
}







export default App