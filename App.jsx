import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    {/* Montseratt Font: Headings */}
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
    {/* Bebas Neue Font: Subheading */}
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
    {/* Outfit Font: Paragraph Website Text */}
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
    {/* Josefin Sans: Button Fonts */}
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"></link>

    <div id = "header">
      <a href="default.asp">
        <img id="menu" src="/src/lines.png" alt="menubar"></img>
      </a>

      <a href="default.asp">
        {/* Logo Image */}
        <img id="image612" src="/src/logo.jpeg" alt="612 Logo"></img> 
      </a>

      <a>
        <button id = "signUpButton">Sign Up</button>
      </a>
    

      <h1 id = "slash">|</h1>

      <a>
        <button id = "logInButton">Login</button>
      </a>
    </div>
    <div id = "bodypage">
        <img id="firstLogo" src="/src/firstR.png" alt="menubar"></img>
        <h1 id = "scoutingHead">S C O U T I N G</h1>
        <h2 id = "scoutingHeading2"><b>Powered By 612 Programming</b></h2>
        <p id = "scoutingParagraphL">About the App.</p>
        <p id = "scoutingParagraph">Get Started:</p>
        <button id = "scoutButton">Start</button>
    </div>
    </>
  )
  
}

export default App
