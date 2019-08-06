import React from 'react'
// import 'babyform.css'

const BabyForm = props => {
    console.log(props)

    const { handleChange, handleSubmit, babyname, babyImg, btnText } = props
    return (
        <div>
            {/* <div className="gracie-div" style={{backgroundImg: `url(${https://images.unsplash.com/photo-1544126592-807ade215a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80})`}}/> */}
            <div> Baby baby</div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="babyname"
                        value={babyname}
                        onChange={handleChange}
                        placeholder="Baby Name"/>
                    <input
                        type="text"
                        name="babyImg"
                        value={babyImg}
                        onChange={handleChange}
                        placeholder="Baby Picture"/>
                    {/* <input
                        type="text"
                        name=""
                        value={}
                        onChange={}
                        placeholder="Baby "/> */}
                    <button>{btnText}</button>
                    
                    
                </form>
    
          </div>
    )
}
  





export default BabyForm 