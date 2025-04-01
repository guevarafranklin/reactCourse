import { useState } from 'react'
import './App.css'

const App = () => {
  const [message, setName] = useState('') // State to store the input value
  const isAdmin = true; // Define isAdmin as a constant or state
  const userRole  = isAdmin ? 'admin' : 'guest'; // Conditional assignment of userRole

  const handleClick = () => {
    alert("You are " + userRole) // Alert with the input value
    setName('') // Clear the input field
  }



  return (
    <>
      <input
        type="text"
        id="name"
        value={message} // Bind the input value to state
        onChange={(e) => setName(e.target.value)} // Update state on input change
      />
      <button onClick={handleClick}>Click me</button>
    </>
  )
}
export default App
