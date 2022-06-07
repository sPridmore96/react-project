import React from "react";
import "./UserTicket.scss";
import TicketCounter from "../TicketCounter/TicketCounter";

const UserTicket = (props) => {
  const { teamArr} = props;

  const teamJSX = teamArr.map((personObj) => {
    return (
      <div className="container" key={personObj.id}>
        <p className="container__id">Personal ID: {personObj.id}</p>
        <h2 className="container__name">{personObj.name}</h2>
        <p className="container__role">{personObj.role}</p>
        <TicketCounter/>
        </div>
    );
  });
  return (
    <>
      {teamJSX}
    </>
  );
};

export default UserTicket;
