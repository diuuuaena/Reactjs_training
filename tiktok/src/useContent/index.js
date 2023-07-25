// import Content from "./Content"
import { useState,createContext, useContext } from 'react'
import Content from './Content' 
import '../App.css'
import { ThemeContext } from './ThemeContext'
//1. Create Context
//2. Provider
//3. Consumer


function App1() {
    const context =useContext(ThemeContext)
    return (
        <div style={{padding: 20}}>
            <button onClick={context.toggleTheme}>Toggle theme</button>
            <Content />
        </div>
    )
}

export default App1