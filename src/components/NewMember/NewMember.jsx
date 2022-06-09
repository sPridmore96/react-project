import React, {useState} from "react";
import "./NewMember.scss"
import Buttons from "../Buttons/Buttons";
import Form from "../Form/Form";




const NewMember = ({handleSubmit}) => {

  const [showForm, setShowForm] = useState(false)
  
  const handleClick = () => {
    setShowForm(!showForm)
  }

  const onLoadJSX =      
  <>
  <h2 className="newMemContainer__heading">Add a new Team Member</h2>
  <Buttons handleClick={handleClick} buttonType = {true}/>
  </>
  const newUserJSX = 
  <>
  <Form handleClick={handleClick} handleSubmit={handleSubmit}/>
  </>
  


  return (
    <div className="newMemContainer">
        {showForm ? newUserJSX : onLoadJSX}
    </div>
  );
};


export default NewMember;
