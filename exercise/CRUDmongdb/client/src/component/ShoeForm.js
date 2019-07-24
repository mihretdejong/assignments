import React from 'react'


const ShoeForm = (props) => {
    const {handleChange, handleSubmit, name, brand, imgUrl, price} = props
    return(
        <div>
            <form onSubmit={handleSubmit} className="form-div">
                <input
                    onChange={handleChange}
                    name="name"
                    type="text"
                    value={name}
                    placeholder="Shoe Name"/>
                <input
                    onChange={handleChange}
                    name="brand"
                    type="text"
                    value={brand}
                    placeholder="Brand"/>
                <input
                    onChange={handleChange}
                    name="price"
                    type="number"
                    value={price}
                    placeholder="Shoe Price"/>
                <input
                    onChange={handleChange}
                    name="imgUrl"
                    type="text"
                    value={imgUrl}
                    placeholder="Image Url"/>
                <button>Submit</button>
            </form>
        </div>
    )
}




export default ShoeForm 





