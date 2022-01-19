import React, { useState } from "react";
import AddUserModal from "../../modal/AddUserModal";
import "../../styles/Header.css";
import ThemeSwitcher from "../ThemeSwitcher";

const Header = ({ currentPage, totalUsers, fetchPage }) => {
  const [isAddUserModalVisible, setIsAddUserModalVisible] = useState(false);

  const showAddUserModal = () => {
    setIsAddUserModalVisible(true);
  };

  return (
    <>
      <div className="header-container">
        <ThemeSwitcher />
        <button onClick={showAddUserModal}>Add user</button>
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
