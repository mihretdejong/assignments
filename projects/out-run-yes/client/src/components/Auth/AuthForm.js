import React from 'react'



const AuthForm = props =>{
    return(
        <form onSubmit={}>
            <input
                type="text"
                name="username"
                value={props.username}
                onChange={}
                placeholder="Username"/>
            <input
                type="text"
                name="password"
                value={props.username}
                onChange={}
                placeholder="Username"/>
            <button>{}</button>

        </form>
    )
}


export default AuthForm