import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Element from './components/Element'
import Pricing from './components/Pricing'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Features from './components/Features'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <ChakraProvider>
     <Element />
     <Pricing/>
     <Features/>
      </ChakraProvider>
      </>
  )
}

export default App
