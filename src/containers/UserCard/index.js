import React, { useState } from "react";
import "../../styles/UserCard.css";
import { Card } from "antd";
import UpdateDetailsModal from "../../modal/UpdateDetailsModal";

import {
  HeartFilled,
  HeartOutlined,
  DeleteFilled,
  EditOutlined,
} from "@ant-design/icons";

import UserDesc from "../../components/UserDescription";
import ToggleLike from "../../functionalities/toggleLike";
import RemoveUser from "../../functionalities/removeUser";

const { Meta } = Card;

const UserCard = ({ usersList, setUsers, user, fetchPage, currentPage }) => {
  const [isLiked, setIsLiked] = useState(user.like);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

  const showModal = () => {
    setIsUpdateModalVisible(true);
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
          onClick={() => RemoveUser(user.id, currentPage, fetchPage)}
          style={{ fontSize: "18px" }}
        />,
      ]}
    >
      <Meta title={user.name} description={<UserDesc desc={user} />} />
      <UpdateDetailsModal
        setIsUpdateModalVisible={setIsUpdateModalVisible}
        isUpdateModalVisible={isUpdateModalVisible}
        usersList={usersList}
        userDetails={user}
        setUsers={setUsers}
      />
    </Card>
  );
};

export default UserCard;
