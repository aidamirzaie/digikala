import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardSlider from './components/cardslider/CardSlider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>digikala</h1>
     <CardSlider/>
    </>
  )
}

export default App
