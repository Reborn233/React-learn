import React from 'react'
import ReactDOM from 'react-dom'
import './lib/index.css'
import App from './router/index'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

registerServiceWorker()
