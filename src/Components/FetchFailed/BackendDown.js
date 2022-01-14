import React from "react";
import "./BackendDown.css";
import ServerDownSVG from "../../Assets/ServerDown.svg";

const BackendDown = () => {
  return (
    <div className="backend-down-container">
      <img src={ServerDownSVG} alt="server-down"></img>
      <div className="backend-down-text">
        <h1>"Oops, There is some problem."</h1>
        <h4>Response</h4>
      </div>
    </div>
  );
};

export default BackendDown;
