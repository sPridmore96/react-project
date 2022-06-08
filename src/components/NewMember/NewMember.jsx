import React from "react";
import "./NewMember.scss"
import Buttons from "../Buttons/Buttons";




const NewMember = () => {
  return (
    <div className="newMemContainer">
        <h2 className="newMemContainer__heading">Add a new Team Member</h2>
      <Buttons buttonType = {true}/>
    </div>
  );
};

export default NewMember;
