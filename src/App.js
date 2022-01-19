import React, { useState, useEffect } from "react";
import CardList from "./components/CardList";
import Spinner from "./components/Spinner";
import { Pagination } from "antd";
import { getUsersPageAPI } from "./services/apiHandler";
import EmptyState from "./components/EmptyState";
import Header from "./containers/Header";

import "./styles/Spinner.css";
import "./App.css";

function App() {
  const [Users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [TotalUsers, setTotalUsers] = useState(0);

  // Have to take care that page No here is 1 greater than the backend.
  // So, while making fetchCall, pass arguments 1 less than the required page. i.e fetchPage(requiredPage-1);
  const fetchpage = async (pageNo) => {
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
    fetchpage(CurrentPage);

    //Uncomment if you want to show the loader for 3 sec initially
    /*
    setTimeout(() => {
    fetchPage(CurrentPage - 1);
    }, 3000);
    */
  }, [CurrentPage]);

  return (
    <div className="main-container">
      {Loading ? (
        <div className="spinner-div">
          <Spinner />
        </div>
      ) : !TotalUsers ? (
        <>
          <Header
            fetchpage={fetchpage}
            currentPage={CurrentPage}
            totalusers={TotalUsers}
          />
          <EmptyState />
        </>
      ) : (
        <>
          <Header
            fetchpage={fetchpage}
            currentPage={CurrentPage}
            totalusers={TotalUsers}
          />
          <CardList
            Users={Users}
            setUsers={setUsers}
            fetchpage={fetchpage}
            currentPage={CurrentPage}
          />
          <Pagination
            className="pagination-container"
            onChange={(Currentpage) => {
              setCurrentPage(Currentpage);
            }}
            current={CurrentPage}
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
