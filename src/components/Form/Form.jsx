import React from "react";
import Buttons from "../Buttons/Buttons";
import "./Form.scss";

const Form = ({ handleSubmit, handleClick }) => {
  return (
    
    <form className="new-mem" onSubmit={handleSubmit}>
          <h2>New Employee</h2>
      <label htmlFor="first-name">Fist Name</label>
      <input
        placeholder="First Name"
        name="firstName"
        id="first-name"
        type="text"
      />
      <label htmlFor="last-name">Last Name</label>
      <input
        placeholder="Last Name"
        name="lastName"
        id="last-name"
        type="text"
      />
      <label htmlFor="role">Job Role</label>
      <input placeholder="Role" id="role" name="role" type="text" />
      <div className="new-mem__buttons">
        <Buttons buttonType={true} />
        <Buttons handleClick={handleClick} />
      </div>
    </form>
  );
};

export default Form;
