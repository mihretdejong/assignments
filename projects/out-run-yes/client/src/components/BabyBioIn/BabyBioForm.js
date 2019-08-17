import React from 'react'


const BabyBioForm = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    value={props.wetDiaper}
                    name=""
                    placeholder=""
                    onChange={props.handleChange}
                    
                    />
                <input
                    type="text"
                    value={props.wetDiaper}
                    name="Wet"
                    placeholder=""
                    onChange={props.handleChange}
                    
                    />
                <input
                    type="text"
                    value={props.wetDiaper}
                    name="Wet"
                    placeholder=""
                    onChange={props.handleChange}
                    
                    />
                <input
                    type="text"
                    value={props.wetDiaper}
                    name="Wet"
                    placeholder=""
                    onChange={props.handleChange}
                    
                    />
                
            </form>
        </div>
    )
}










export default BabyBioForm