import React from "react";
import UserCard from "../../containers/UserCard";

import "../../styles/Spinner.css";
import "../../styles/CardList.css";

const CardList = ({ Users, setUsers, fetchpage, currentPage }) => {
  return (
    <div className="card-list-container">
      {Users.map((user) => {
        return (
          <div className="outerUserCard" key={user.id}>
            <UserCard
              user={user}
              usersList={Users}
              setUsers={setUsers}
              fetchpage={fetchpage}
              currentPage={currentPage}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
