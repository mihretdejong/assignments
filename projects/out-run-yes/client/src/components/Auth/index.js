import React, { Component } from 'react'
import AuthForm from './AuthForm.js';
import { withUser } from '../../context/UserProvider.js'


class Auth extends Component{
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            toggle: false 

        }
    }
    toggler = () => {
        this.setState(prevState => ({ toggle: !prevState.toggle}))
    }

    handleChange = (e) => {
        const {name, value } = e.target
        this.setState({ [name]: value })
    }
// when the button signup is hit, the handlesignmupsubmit methods should call on the signup method from user provider 
// we are passing the credential to the signup method in user Provider 
    handleSignupSubmit = e => {
        e.preventDefault()
        const creds = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.signup(creds)
        //userprovider is storing the method in props so we say this.props.signup
    }
    handleLoginSubmit = e => {
        e.preventDefault()
        const creds = {
            username: this.state.username,
            password: this.state.password,
        }
        console.log(creds)
        this.props.login(creds)
        //userprovider is storing the method in props so we say this.props.signup
    }
    
     // the JSX rull states that we can only return one div
     // if we have to break that to return more than one element, we would have use fragments
     // if we don't use fragments and use div instead, the ternary won't work because our elemnts have to sahre the same div 

    render(){
        return(

            <div className="auth-div">
            
                { !this.state.toggle? 
                      <>
                    
                        <AuthForm
                            username={this.state.username}
                            password={this.state.password}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSignupSubmit}
                            btntext="Sign up"
                            className="signup"
                            />
                            <div className="auth-redirect-div">
                                <p>Have an account? 
                                    <span onClick={this.toggler}> Log in  </span>
                                </p>
                                <p className="err-msg">{this.props.errMsg} </p>
                            </div>
                        {console.log(this.props.errMsg)}
                       </>

                 :
                     <>
                        <AuthForm
                            username={this.state.username}
                            password={this.state.password}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleLoginSubmit}
                            btntext="Login"
                            className="login"
                            />
                            <div className="signup-redirect-div">
                                <p > Don't have an account?
                                    <span onClick={this.toggler} > Sign up</span> </p>
                                <p className="err-msg">{this.props.errMsg}</p>
                            </div>
                    </>
                    

                }

            </div>
        )
    }
}


export default withUser(Auth);













