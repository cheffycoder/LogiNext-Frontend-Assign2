import React from "react";
import "./EmptyState.css";

const EmptyState = () => {
  return (
    <div className="empty-state-container">
      <div className="empty-state-text">
        <h1>"Oops, There are no users in the Database"</h1>
        <h4>You can add one using the button below</h4>
      </div>

      <button> Add User</button>
    </div>
  );
};

export default EmptyState;
