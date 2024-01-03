import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './components/Logo'
import Hommebutton from './components/Hommebutton'
import Text from './components/Text'

function App() {

  return (
    <div>
      <div className="header">
           <Logo/> 
           <Hommebutton/>
     </div>
     <div className="electrochip">
     <Text/>
     </div>
    </div>
  )
}

export default App
