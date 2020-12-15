import React from 'react'
import ReactDOM from 'react-dom'
import Index from './components/views/index'

export default function App (){
    return <Index />
}

ReactDOM.render(<App />, document.getElementById('app'))