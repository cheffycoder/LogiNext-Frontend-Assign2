import React from "react";
import UserCard from "../UserCard/UserCard";
// import Spinner from "../Spinner/Spinner";

import "../Spinner/Spinner.css";
import "./CardList.css";

const CardList = ({ Users, setUsers, fetchPage, currentPage }) => {
  return (
    <div className="card-list-container">
      {Users.map((user) => {
        return (
          <div className="outerUserCard" key={user.id}>
            <UserCard
              user={user}
              usersList={Users}
              setUsers={setUsers}
              fetchPage={fetchPage}
              currentPage={currentPage}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
