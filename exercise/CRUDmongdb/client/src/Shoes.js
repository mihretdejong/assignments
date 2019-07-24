import React, {Component} from 'react'
// when the component is loaded, props gets added as an object to the class function 

class Shoes extends Component{
    // constructor(){

    // }
    
    render(){
        const mappedShoes = this.props.shoes.map(shoe => {
            console.log(this.props.handleDelete)
            return <div key = {shoe._id}
                        className="shoe-div"> 
                         <h1>{shoe.name}</h1>
                         <h3>{shoe.brand}</h3>
                         <h3>{shoe.isAvailable}</h3>
                         <p>{shoe.price}</p>
                         {/* <img src= {shoe.imgUrl} alt=""/> */}
                         <div className="shoe-img-div" style={{backgroundImage: `url(${shoe.imgUrl})`}}></div>
                         <button onClick={(e) => this.handleDelete(shoe._id)} >Delete</button>
                         <button onClick={}> Edit </button>
                         
                         
                  </div>
        } )
        
        return(
               
            <div className= "shoe-container-div">
                <h1>Shoe Store</h1>

                {mappedShoes}
            </div>
        )
    }
}







export default Shoes 