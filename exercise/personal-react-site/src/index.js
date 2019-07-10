import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
// import TriviaProvider from './context/TriviaProvider.js'
import { BrowserRouter } from 'react-router-dom' 
//install react-router-dom first



ReactDOM.render(

    <BrowserRouter>
      {/* <TriviaProvider> */}
        <App/>

      {/* </TriviaProvider> */}
    </BrowserRouter>
    , document.getElementById('root'))