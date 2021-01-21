import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'


console.log(process.env.OPENWEATHER_API_KEY);

ReactDOM.render( < App /> , document.getElementById('root'))