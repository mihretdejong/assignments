import React from 'react'


const BabyEditForm = (props) => {
    const { toggler, toggle, handleSubmit, handleChange, name, babyProImg} = props
    console.log(toggle)
    return(
        <div className="baby-profile-edit" >
            {toggle?
                
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        placeholder="Baby Name"
                        />
                    <input
                        type="text"
                        name="babyProImg"
                        value={babyProImg}
                        onChange={handleChange}
                        placeholder="Baby Profile Image"
                        />
                    <button className="inside-form-button"> Edit</button>
                </form>
                :
                <button  onClick={toggler} >Edit Little Love's Profile</button>
        

        
            }
        </div>
    )
}

export default BabyEditForm