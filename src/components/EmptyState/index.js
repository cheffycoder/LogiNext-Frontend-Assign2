import React from "react";
import "../../styles/EmptyState.css";
import AddUserSVG from "../../assets/adduser.svg";

const EmptyState = () => {
  return (
    <div className="empty-state-container">
      <img src={AddUserSVG} alt="no-user" />
      <div className="empty-state-text">
        <h1>"Oops, There are no users in the Database"</h1>
        <h3>Add one using the button above.</h3>
      </div>
    </div>
  );
};

export default EmptyState;
