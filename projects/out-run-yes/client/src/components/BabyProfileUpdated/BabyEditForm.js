import React from 'react'


const BabyEditForm = (props) => {
    const { toggler, toggle, handleSubmit, handleChange, name, babyProImg} = props
    console.log(toggle)
    return(
        <div >
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
                    <button> Edit Little Love's Profile</button>
                </form>
                :
                <button onClick={toggler} >Edit Profile</button>
        

        
            }
        </div>
    )
}

export default BabyEditForm