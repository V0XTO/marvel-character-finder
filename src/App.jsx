import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CharacterList from './components/CharacterList'
function App() {
  
 

  
  return (
    <>
     <h1 className='font-bold font-Nb justify-center flex pt-12  text-4xl mb-14 '> MARVEL CHARACTER FINDER </h1>
     
     
     <CharacterList/>
    </>
  )
}

export default App
