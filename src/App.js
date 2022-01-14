import React, { useState, useEffect } from "react";
import { getUsersPageAPI } from "../src/Service/ApiHandler";
import CardList from "./Components/CardList/CardList";
import Spinner from "./Components/Spinner/Spinner";
import { Pagination } from "antd";

import "./Components/Spinner/Spinner.css";
import "./App.css";
import EmptyState from "./Components/EmptyState/EmptyState";
// import BackendDown from "./Components/FetchFailed/BackendDown";

function App() {
  const [Users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [TotalUsers, setTotalUsers] = useState(0);

  // Have to take care that page No here is 1 greater than the backend.
  // So, while making fetchCall, pass arguments 1 less than the required page. i.e fetchPage(requiredPage-1);
  const fetchPage = async (pageNo) => {
    try {
      console.log("fetching page: ", pageNo);
      const res = await getUsersPageAPI(pageNo);
      if (res.data.Data.length === 0 && res.data["TotalUsers"] !== 0) {
        console.log("Calling page:", pageNo - 1);
        setCurrentPage(pageNo);

        // fetchPage(CurrentPage);  --> Note: If you want to rerender just change currentPage and don't call fetch page anywhere
      } else {
        setUsers(res.data["Data"]);
        setTotalUsers(res.data["TotalUsers"]);
        setCurrentPage(pageNo + 1);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPage(CurrentPage - 1);

    //Uncomment if you want to show the loader for 3 sec initially
    // setTimeout(() => {
    // fetchPage(CurrentPage - 1);
    // }, 3000);
  }, [CurrentPage]);

  return (
    <div className="main-container">
      {Loading ? (
        <div className="spinner-div">
          <Spinner />
        </div>
      ) : !TotalUsers ? (
        <EmptyState />
      ) : (
        <>
          <CardList
            Users={Users}
            setUsers={setUsers}
            fetchPage={fetchPage}
            currentPage={CurrentPage}
          />
          <Pagination
            className="pagination-container"
            onChange={(Currentpage) => {
              setCurrentPage(Currentpage);
            }}
            defaultCurrent={1} // Default Page to open for first render
            defaultPageSize={4} // No of elements in a page
            total={TotalUsers} // Total no of users overall, and according to this Total pages will be decided.
          />
        </>
      )}
    </div>
  );
}
export default App;
