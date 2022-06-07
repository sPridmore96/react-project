import React from 'react'
import "./Buttons.scss"



const Buttons = (props) => {

let {buttonStyle, ButtonText} = props

    buttonStyle = "button"
    ButtonText = "+"

    if (props.buttonStyle) {
        buttonStyle += " positive"
    } else {
        buttonStyle += " negative"
        ButtonText = "-"
    }

  return (
    <div><button className={buttonStyle}>{ButtonText}</button></div>
  )
}

export default Buttons