import React, {useState} from 'react'
import "./Form.scss"



const Form = () => {

const [inputValue, setInputValue] = useState("")

    const handleInput = (event) => {
        event = event.target.value
        setInputValue(event)
    }
    const handleSubmit = () => {
        console.log("prick");
    }


  return (
    <form className="newMemForm" onSubmit={handleSubmit}>
    <label htmlFor="first-name">Fist Name</label>
    <input placeholder='First Name' id="first-name" onInput={handleInput} type="text" />
    <label htmlFor="last-name">Last Name</label>
    <input placeholder='Last Name' id="last-name" onInput={handleInput} type="text" />
    <label htmlFor="role">Job Role</label>
    <input placeholder='Role' id="role" onInput={handleInput} type="text" />
    <label htmlFor="tickets">Pre-completed Tickets</label>
    <input id="tickets" onInput={handleInput} type="number" />
    <input id="submit" type="submit" value="submit" />
  </form>
  )
}

export default Form