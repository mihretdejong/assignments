import React from 'react'



const AuthForm = props =>{
    const { username, password, handleChange, handleSubmit, btntext} = props
    return(
        <form onSubmit={handleSubmit}>
            <input  
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Username"/>
            <input
                type="text"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="password"/>
            <button>{btntext}</button>

        </form>
    )
}


export default AuthForm