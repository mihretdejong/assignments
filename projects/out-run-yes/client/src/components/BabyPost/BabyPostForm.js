import React from 'react'

const BabyPostForm = (props) => {
    const { handleSubmit, handleChange, img, imgCaption } = props
    console.log(props)

    return(
        <div>

            <form className="post-form-div" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={img}
                    name="img"
                    onChange={handleChange}
                    placeholder="Add baby's image"
                    />
                <input
                    type="text"
                    value={imgCaption}
                    name="imgCaption"
                    onChange={handleChange}
                    placeholder="Your thoughts on this image"
                    />
                <button>Post It</button>
                
            </form>
        </div>
    )
}



export default BabyPostForm 