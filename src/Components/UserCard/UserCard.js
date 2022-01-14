import React, { useState } from "react";
import "./UserCard.css";
import { Card } from "antd";
import UpdateDetailsModal from "../../Modal/UpdateDetails/UpdateDetailsModal";

import {
  HeartFilled,
  HeartOutlined,
  DeleteFilled,
  EditOutlined,
} from "@ant-design/icons";

import UserDesc from "../UserDescription/UserDesc";
import ToggleLike from "../../UserFunctionality/ToggleLike";
import RemoveUser from "../../UserFunctionality/RemoveUser";

const { Meta } = Card;

const UserCard = ({ usersList, setUsers, user, fetchPage, currentPage }) => {
  const [isLiked, setIsLiked] = useState(user.like);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
          onClick={() => RemoveUser(user.id, fetchPage, currentPage)}
          style={{ fontSize: "18px" }}
        />,
      ]}
    >
      <Meta title={user.name} description={<UserDesc desc={user} />} />
      <UpdateDetailsModal
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
