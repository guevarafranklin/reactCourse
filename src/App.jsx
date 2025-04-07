import { useState } from 'react'
import './App.css'
import reactImg from './assets/contact-form.png'

const App = () => {
  const [message, setMessage] = useState('') // State to store the input value
  const isAdmin = false; // Define isAdmin as a constant or state
  const userRole  = isAdmin ? 'admin' : 'guest'; // Conditional assignment of userRole
  const wellcomeMessage = `Welcome! This is my first react app` // Template literal for welcome message

  const handleClick = () => {
    alert("You are " + userRole) // Alert with the input value
    setMessage('') // Clear the input field
  }



  return (
    <>
      <img src={reactImg} alt="React logo" height="100px" width="100px"/>
      <h1> {wellcomeMessage}</h1>
      {/* Conditional rendering based on userRole */}
      {userRole === 'admin' ? (
        <h2>Welcome Admin</h2>
      ) : (
        <h2>Welcome Guest</h2>
      )}
      {/* Input field for user to enter their name */}
      <label htmlFor="name">Enter your name:</label>
      {/* Controlled input field */}
      {/* The value of the input is controlled by the state variable 'message' */}
      {/* The onChange event updates the state variable 'message' with the input value */}
      {/* The input field is associated with the label using the htmlFor attribute */}
      <br />
      {/* Input field for user to enter their name */}
      <input
        type="text"
        id="name"
        value={message} // Bind the input value to state
        onChange={(e) => setMessage(e.target.value)} // Update state on input change
      />
      <button onClick={handleClick}>Click me</button>
    </>
  )
}
export default App
