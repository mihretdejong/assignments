import React from 'react'



const BabyGrowthForm = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    value={props.height}
                    name="height"
                    onChange={props.handleChange}
                    placeholder="Baby's Height"
                    
                    />
                <input
                    type="text"
                    value={props.weight}
                    name="weight"
                    onChange={props.handleChange}
                    placeholder="Baby's Weight"
                    
                    />
                <input
                    type="text"
                    value={props.headCircumference}
                    name="headCircumference"
                    onChange={props.handleChange}
                    placeholder="Baby's Head Circumference"
                    
                    />
                <input
                    type="text"
                    value={props.date}
                    name="intake"
                    onChange={props.handleChange}
                    placeholder="Baby's Head Circumference"
                    
                    />
                <button>Enter Baby's Growth </button>
            </form>
        </div>
    )
}




export default BabyGrowthForm