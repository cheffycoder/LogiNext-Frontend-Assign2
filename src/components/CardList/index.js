import React from "react";
import UserCard from "../../containers/UserCard";

import "../../styles/Spinner.css";
import "../../styles/CardList.css";

const CardList = ({ usersList, setUsers, fetchPage, currentPage }) => {
  return (
    <div className="card-list-container">
      {usersList.map((user) => {
        return (
          <div className="outer-user-card" key={user.id}>
            <UserCard
              user={user}
              usersList={usersList}
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
