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
import { UpdateLike } from "../../Service/ApiHandler";

const { Meta } = Card;

const UserCard = ({ setUsers, user, usersList, Delete }) => {
  const [isLiked, setIsLiked] = useState(user.like);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleLike = (userId) => {
    if (isLiked) {
      UpdateLike(userId, !isLiked).then(() => setIsLiked(false));
    } else {
      UpdateLike(userId, !isLiked).then(() => setIsLiked(true));
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const Like = isLiked ? (
    <HeartFilled style={{ color: "red", fontSize: "20px" }} />
  ) : (
    <HeartOutlined style={{ color: "red", fontSize: "20px" }} />
  );

  return (
    <div className="card-end">
      <Card
        cover={
          <img
            alt="avatar"
            src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happy`}
          />
        }
        actions={[
          <button onClick={() => toggleLike(user.id)}>{Like}</button>,
          <EditOutlined
            key="edit"
            onClick={showModal}
            style={{ fontSize: "18px" }}
          />,
          <DeleteFilled
            key={user.id}
            onClick={() => Delete(user.id)}
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
    </div>
  );
};

export default UserCard;
