import React from "react";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";
import "../Card.css";

const UserDesc = ({ desc }) => {
  return (
    <div className="card-descrption">
      <div className="list">
        <MailOutlined style={{ fontSize: "18px" }} />
        <p style={{ marginLeft: "10px" }}>{desc.email}</p>
      </div>
      <div className="list">
        <PhoneOutlined style={{ fontSize: "18px" }} />
        <p style={{ marginLeft: "10px" }}>{desc.phone}</p>
      </div>
      <div className="list">
        <GlobalOutlined style={{ fontSize: "18px" }} />
        <p style={{ marginLeft: "10px" }}>{desc.website}</p>
      </div>
    </div>
  );
};

export default UserDesc;
