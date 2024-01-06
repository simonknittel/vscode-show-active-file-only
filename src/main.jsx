import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

    <a href="https://react.dev" target="_blank" rel="noreferrer">
      <img src={ reactLogo } className="logo react" alt="React logo" />
    </a>
  </React.StrictMode>,
)
