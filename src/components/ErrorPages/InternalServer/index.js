import React from "react";
import "../../../styles/FetchFailed.css";
import ServerDownSVG from "../../../assets/serverdown.svg";

const InternalServerError = () => {
  // console.log(errorMessage);
  return (
    <div className="backend-down-container">
      <img src={ServerDownSVG} alt="server-down"></img>
      <div className="backend-down-text">
        <h1>"Oops, There is some problem."</h1>
        {/* <h4>{errorMessage}</h4> */}
      </div>
    </div>
  );
};

export default InternalServerError;
