import React, { useState } from "react";
import "./UserCard.css";
import { Card } from "antd";
import BasicModal from "../../Modal/BasicModal";

import {
  HeartFilled,
  HeartOutlined,
  DeleteFilled,
  EditOutlined,
} from "@ant-design/icons";

import UserDesc from "../UserDescription/UserDesc";
import ToggleLike from "../../UserFunctionality/ToggleLike";
import RemoveUser from "../../UserFunctionality/RemoveUser";
// import DeleteUser from "../../Service/ApiHandler";

const { Meta } = Card;

const UserCard = ({ usersList, setUsers, user }) => {
  const [isLiked, setIsLiked] = useState(user.like);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // const removeUser = async (userId) => {
  //   try {
  //     await deleteUser(userId);
  //     alert("User Deleted");
  //     setUsers(Users.filter((user) => user.id !== userId));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <Card
      className="innerUserCard"
      cover={
        <img
          alt="avatar"
          src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happy`}
        />
      }
      actions={[
        <button onClick={() => ToggleLike(user.id, isLiked, setIsLiked)}>
          {isLiked ? (
            <HeartFilled style={{ color: "red", fontSize: "20px" }} />
          ) : (
            <HeartOutlined style={{ color: "red", fontSize: "20px" }} />
          )}
        </button>,
        <EditOutlined
          key="edit"
          onClick={showModal}
          style={{ fontSize: "18px" }}
        />,
        <DeleteFilled
          key={user.id}
          onClick={() => RemoveUser(user.id, usersList, setUsers)}
          style={{ fontSize: "18px" }}
        />,
      ]}
    >
      <Meta title={user.name} description={<UserDesc desc={user} />} />
      <BasicModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        usersList={usersList}
        userDetails={user}
        setUsers={setUsers}
      />
    </Card>
  );
};

export default UserCard;
