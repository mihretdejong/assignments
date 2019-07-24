import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import {BrowserRouter} from 'react-router-dom'
import ContactProvider from './context/ContactProvider.js'

// if only one componenet nees it we can just import it App and wrap our component with contact provider
ReactDOM.render(
    <BrowserRouter>
        
            <App/> 
       
    </BrowserRouter>

    ,document.getElementById('root'))