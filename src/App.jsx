import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productcard/ProductCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>digikala</h1>
     <ProductCard></ProductCard>
    </>
  )
}

export default App
