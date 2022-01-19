import React, { useState, useEffect } from "react";
import CardList from "./components/CardList";
import Spinner from "./components/Spinner";
import { Pagination } from "antd";
import { getUsersPageAPI } from "./services/apiHandler";
import EmptyState from "./components/EmptyState";
import Header from "./containers/Header";
import "./styles/DarkMode.css";

import "./styles/Spinner.css";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);

  // Have to take care that page No here is 1 greater than the backend.
  // So, while making fetchCall, pass arguments 1 less than the required page. i.e fetchPage(requiredPage-1);
  const fetchPage = async (pageNo) => {
    try {
      // We have to fetch 1 page less than the pageAsked.
      const res = await getUsersPageAPI(pageNo - 1);

      // There are no users in this page make call to 1 page less --> Helps while deletion
      if (res.data.Data.length === 0 && res.data["TotalUsers"] !== 0) {
        setCurrentPage(pageNo - 1);
      } else {
        setUsers(res.data["Data"]);
        setTotalUsers(res.data["TotalUsers"]);

        setCurrentPage(pageNo);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPage(currentPage);

    //Uncomment if you want to show the loader for 3 sec initially
    /*
    setTimeout(() => {
    fetchPage(CurrentPage - 1);
    }, 3000);
    */
  }, [currentPage]);

  return (
    <div className="main-container">
      {loading ? (
        <div className="spinner-div">
          <Spinner />
        </div>
      ) : !totalUsers ? (
        <>
          <Header
            fetchPage={fetchPage}
            currentPage={currentPage}
            totalusers={totalUsers}
          />
          <EmptyState />
        </>
      ) : (
        <>
          <Header
            fetchPage={fetchPage}
            currentPage={currentPage}
            totalUsers={totalUsers}
          />
          <CardList
            usersList={users}
            setUsers={setUsers}
            fetchPage={fetchPage}
            currentPage={currentPage}
          />
          <Pagination
            className="pagination-container"
            onChange={(currentPage) => {
              setCurrentPage(currentPage);
            }}
            current={currentPage}
            defaultCurrent={1} // Default Page to open for first render
            defaultPageSize={4} // No of elements in a page
            total={totalUsers} // Total no of users overall, and according to this Total pages will be decided.
          />
        </>
      )}
    </div>
  );
}
export default App;
