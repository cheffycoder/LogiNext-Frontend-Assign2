import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import Spinner from "../Spinner/Spinner";
import { getAllUsers } from "../../Service/ApiHandler";
import "../Spinner/Spinner.css";
import "./CardList.css";

const CardList = () => {
  const [Users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await getAllUsers();
      setUsers(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    //Uncomment if you want to show the loader for 3 sec initially
    // setTimeout(() => {
    //   fetchData();
    // }, 3000);
  }, []);

  return (
    <div className="container">
      <div className="card-list-container">
        {Loading ? (
          <div className="spinner-div">
            <Spinner />
          </div>
        ) : (
          Users.map((user) => {
            return (
              <div className="outerUserCard" key={user.id}>
                <UserCard user={user} usersList={Users} setUsers={setUsers} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CardList;
