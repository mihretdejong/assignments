import React from 'react'
// import 'babyform.css'

const BabyForm = props => {
    

    // console.log(props)
    const { handleChange, handleSubmit,babyProImg, babyName, btnText, } = props
     
    return (
        <div className="baby-form-direct-div" >
            {/* <div className="gracie-div" style={{backgroundImg: `url(${https://images.unsplash.com/photo-1544126592-807ade215a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80})`}}/> */}
             <h2>Register baby</h2>
                <form className="baby-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="babyName"
                        value={babyName}
                        onChange={handleChange}
                        placeholder="Baby Name"/>
                    <input
                        type="text"
                        name="babyProImg"
                        value={babyProImg}
                        onChange={handleChange}
                        placeholder="Baby Picture"/>
            
                    <button>{btnText}</button>  
                </form>
               
    
          </div>
    )
}
  





export default BabyForm 