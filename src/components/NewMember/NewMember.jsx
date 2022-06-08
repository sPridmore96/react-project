import React, {useState} from "react";
import "./NewMember.scss"
import Buttons from "../Buttons/Buttons";
import Form from "../Form/Form";




const NewMember = (props) => {

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
  <Form/>
  </>
  


  return (
    <div className="newMemContainer">
        {showForm ? newUserJSX : onLoadJSX}
    </div>
  );
};


export default NewMember;
