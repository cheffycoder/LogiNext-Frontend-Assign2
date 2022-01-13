import React, { useState } from "react";
import { Modal } from "antd";
import { Form, Input } from "antd";
import "./BasicModal.css";
import { UpdateDetails } from "../Service/ApiHandler";

const BasicModal = ({
  setIsModalVisible,
  setUsers,
  usersList,
  isModalVisible,
  userDetails,
}) => {
  const [name, setName] = useState(userDetails.name);
  const [email, setEmail] = useState(userDetails.email);
  const [phone, setPhone] = useState(userDetails.phone);
  const [website, setWebsite] = useState(userDetails.website);
  // const payLoad = ;

  const handleOk = () => {
    UpdateDetails(userDetails.id, {
      name,
      email,
      phone,
      website,
    }).then((res) => {
      console.log(res.data);
      setUsers(
        usersList.map((user) => {
          console.log("Hola from Basic Modal map");
          if (user.id === res.data.id) {
            return res.data;
          }
          return user;
        })
      );
    });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Modal
        title="Edit User Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="form-input">
          <Form
            className="form-inside-input"
            noValidate
            initialValues={{
              name: userDetails.name,
              email: userDetails.email,
              phone: userDetails.phone,
              site: userDetails.website,
            }}
          >
            <Form.Item label="Name" name="name" rules={[{ required: true }]}>
              <Input type="text" onChange={(e) => setName(e.target.value)} />
            </Form.Item>

            <Form.Item label="Email" name="email" rules={[{ required: true }]}>
              <Input type="text" onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>

            <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
              <Input type="text" onChange={(e) => setPhone(e.target.value)} />
            </Form.Item>

            <Form.Item label="Website" name="site" rules={[{ required: true }]}>
              <Input onChange={(e) => setWebsite(e.target.value)} />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default BasicModal;
