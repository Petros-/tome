import { useState } from 'react'
import './App.css'
import TopNav from './TopNav'
import ArtworksList from './ArtworksList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNav />
      <ArtworksList />
    </>
  )
}

export default App
