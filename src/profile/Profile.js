import React from "react";
import PropTypes from "prop-types";


const handelName = (name) => {
    alert(`Hello I am ${name}`);
  };


const Profile = (props) => {
  return (
    <div style={{ width: "18rem", margin: "40px 0 40px 0" }}>
        
          
        <img src={props.children}  style={{ width: "18rem", margin: "40px 0 40px 0" }} />  
        <br />      
        {props.name} 
        <br />
        {props.bio}
        <br />
        {props.profession}
        <br />
        <button type="button" onClick={() => handelName(props.name)} >Click Me!</button>

    </div>
      
  );
};

Profile.propTypes = {
   
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,


  
};

Profile.defaultProps = {
  name: "Houssem",
}; 

export default Profile; 