import React, {useState, useTransition} from "react";
import "./UserTicket.scss";
import TicketCounter from "../TicketCounter/TicketCounter";
import NewMember from "../NewMember/NewMember";

const UserTicket = ({teamArr}) => {
  const [newCounter, setNewCounter] = useState(0)
  const [newUser, setNewUser] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    let Name = `${event.target[0].value} ${event.target[1].value}` ;
    let role = event.target[2].value;


    setNewUser(teamArr.push( {
      id: teamArr.length + 1,
      name: Name,
      role: role,
    }))
    event.target[0].value = ""
    event.target[1].value = ""
    event.target[2].value = ""
  }

  const teamJSX = teamArr.map((personObj) => {
    return (
      <div className="container" key={personObj.id}>
        <p className="container__id">Personal ID: {personObj.id}</p>
        <h2 className="container__name">{personObj.name}</h2>
        <p className="container__role">{personObj.role}</p>
        <p className="container__count">Current Ticket Count :</p>
        <TicketCounter />
        </div>
    );
  });
  return (
    <>
    <NewMember handleSubmit={handleSubmit}/>
      {teamJSX}
    </>
  );
};

export default UserTicket;
