import React from "react";
import "./UserTicket.scss";
import TicketCounter from "../TicketCounter/TicketCounter";
import NewMember from "../NewMember/NewMember";

const UserTicket = (props) => {
  const { teamArr} = props;

  const teamJSX = teamArr.map((personObj) => {
    return (
      <div className="container" key={personObj.id}>
        <p className="container__id">Personal ID: {personObj.id}</p>
        <h2 className="container__name">{personObj.name}</h2>
        <p className="container__role">{personObj.role}</p>
        <p className="container__count">Current Ticket Count :</p>
        <TicketCounter/>
        </div>
    );
  });
  return (
    <>
    <NewMember/>
      {teamJSX}
    </>
  );
};

export default UserTicket;
