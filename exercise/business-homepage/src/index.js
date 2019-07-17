import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.render(
    <BrowserRouter>
       <App />
    </BrowserRouter>

, document.getElementById('root'))

// ReactDOM.render(<App name="Mihret" age={20}/>, document.getElementById('root'))

