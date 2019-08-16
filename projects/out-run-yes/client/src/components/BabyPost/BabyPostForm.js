import React from 'react'

const BabyPostForm = (props) => {
    const { handleSubmit, handleChange, img, imgCaption, title, ageInMonths,  } = props
    // console.log(props)

    return(
        <div >

            <form className="post-form-div" onSubmit={handleSubmit}>
                <h3> Baby's Image</h3>
                <input
                    type="text"
                    value={img}
                    name="img"
                    onChange={handleChange}
                    placeholder="Add baby's image"
                    />
                <h3>Title</h3>
                <input
                    type="text"
                    value={title}
                    name="title"
                    onChange={handleChange}
                    placeholder="Title of Image"
                    />
                <h3>Age in months...</h3>
                <input
                    type="number"
                    value={ageInMonths}
                    name="ageInMonths"
                    onChange={handleChange}
                    placeholder="Age In Months"
                    />
                <h3>Thoughts... </h3>
                <input
                    className="text-area"
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