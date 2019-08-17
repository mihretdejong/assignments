import React from 'react'



const AuthForm = props =>{
    const { username, password, handleChange, handleSubmit, btntext} = props
    return(
        <form className="auth-form-div" onSubmit={handleSubmit}>
            <div className="head-div">
                <h1>bLog</h1>
                <p>Your baby's daily log</p>
            </div>
            <input  
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Username"/>
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"/>
            <button>{btntext}</button>

        </form>
    )
}


export default AuthForm