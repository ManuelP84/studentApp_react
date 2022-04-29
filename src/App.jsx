import { useState } from 'react'
import './App.css'
import ListOfStudents from './components/ListOfComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>STUDENTS APP</h1>
      <ListOfStudents/>
    </div>
  )
}

export default App
