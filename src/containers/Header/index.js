import React, { useState } from "react";
import AddUserModal from "../../modal/AddUserModal";
import "../../styles/Header.css";

const Header = ({ currentPage, totalusers, fetchpage }) => {
  const [isAddUserModalVisible, setIsAddUserModalVisible] = useState(false);

  const showAddUserModal = () => {
    setIsAddUserModalVisible(true);
  };

  return (
    <>
      <div className="header-container">
        <button onClick={showAddUserModal}>Add user</button>
      </div>
      <AddUserModal
        isAddUserModalVisible={isAddUserModalVisible}
        setIsAddUserModalVisible={setIsAddUserModalVisible}
        fetchpage={fetchpage}
        currentPage={currentPage}
        totalusers={totalusers}
      />
    </>
  );
};

export default Header;
