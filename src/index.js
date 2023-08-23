import React from 'react'
// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App';


// Project 

// ReactDOM.render(<>
// <BrowserRouter>
//     <App />
// </BrowserRouter>

// </>,document.getElementById('root'))


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render( <BrowserRouter> <App /> </BrowserRouter>)
