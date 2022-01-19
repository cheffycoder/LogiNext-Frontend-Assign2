import React, { useState } from "react";
import AddUserModal from "../../modal/AddUserModal";
import ThemeSwitcher from "../ThemeSwitcher";

import "../../styles/Header.css";
import { Affix } from "antd";

const Header = ({ currentPage, totalUsers, fetchPage }) => {
  const [isAddUserModalVisible, setIsAddUserModalVisible] = useState(false);

  const showAddUserModal = () => {
    setIsAddUserModalVisible(true);
  };

  return (
    <>
      <div className="header-container">
        <Affix offsetTop={0}>
          <div className="header">
            <ThemeSwitcher />
            <button onClick={showAddUserModal}>Add user</button>
          </div>
        </Affix>
      </div>

      <AddUserModal
        isAddUserModalVisible={isAddUserModalVisible}
        setIsAddUserModalVisible={setIsAddUserModalVisible}
        fetchPage={fetchPage}
        currentPage={currentPage}
        totalUsers={totalUsers}
      />
    </>
  );
};

export default Header;
