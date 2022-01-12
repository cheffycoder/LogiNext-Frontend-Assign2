import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import "../../App.css";
import Spinner from "../Spinner/Spinner";
import { getAllUsers, deleteUser } from "../../Service/ApiHandler";

const CardList = () => {
  const [Users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    getAllUsers().then((response) => setUsers(response.data));
    setLoading(false);

    /* Uncomment if you want to show the loader for 3 sec initially
    setTimeout(() => {
      getAllUsers().then((response) => setUsers(response.data));
    }, 3000);
    setLoading(false);
  */
  }, [Users]);

  const removeUser = (userId) => {
    deleteUser(userId).then(() => {
      setUsers(Users.filter((user) => user.id !== userId));
    });
  };

  return (
    <div className="card-list-container">
      {Loading ? (
        <Spinner />
      ) : (
        Users.map((user) => {
          return (
            <div className="card-container" key={user.id}>
              <UserCard
                user={user}
                usersList={Users}
                Delete={removeUser}
                setUsers={setUsers}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default CardList;
