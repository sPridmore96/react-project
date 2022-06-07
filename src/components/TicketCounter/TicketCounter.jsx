import React from 'react'
import "./TicketCounter.scss"
import Buttons from '../Buttons/Buttons'
import DisplayCount from '../DisplayCount/DisplayCount'

const TicketCounter = (props) => {

  return (
    <div className='counter'>
        <h3 className='counter__header'>Ticket Total :</h3>
        <div className='counter__display'>
        <DisplayCount/>
        </div>
        <div className='counter__buttons-container'>
        <Buttons buttonStyle={true}/>
        <Buttons/>
        </div>
        </div>
  )
}

export default TicketCounter