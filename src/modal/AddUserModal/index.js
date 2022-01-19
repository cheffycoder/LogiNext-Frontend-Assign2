import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Form, Input } from "antd";
import addUser from "../../functionalities/addUser";

// import "../../styles/AddUserModal.css";
// import { AddUserAPI } from "../../services/apiHandler";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const AddUserModal = ({
  isAddUserModalVisible,
  setIsAddUserModalVisible,
  fetchpage,
  currentPage,
  totalusers,
}) => {
  const [form] = Form.useForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState({
    zipcode: "",
    street: "",
    suite: "",
    city: "",
  });

  const payload = {
    name,
    email,
    phone,
    website,
    company,
    address,
  };

  const handleSubmit = () => {
    addUser(
      currentPage,
      totalusers,
      fetchpage,
      setIsAddUserModalVisible,
      payload
    );
    form.resetFields();
  };

  const handleCancel = () => {
    setIsAddUserModalVisible(false);
  };

  return (
    <div className="add-user-form">
      <Modal
        title="Add User"
        visible={isAddUserModalVisible}
        style={{ top: "5%" }}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form form={form} className="form-input" onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter username!" }]}
          >
            <Input type="text" onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item
            name="Email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter your Email!",
              },
            ]}
          >
            <Input type="text" onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item
            name="website"
            label="Website"
            rules={[{ required: true }]}
          >
            <Input
              type="text"
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="Website URL"
            />
          </Form.Item>
          <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
            <Input type="text" onChange={(e) => setPhone(e.target.value)} />
          </Form.Item>
          <Form.Item
            name="company"
            label="Company"
            rules={[{ required: true }]}
          >
            <Input
              type="text"
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company name"
            />
          </Form.Item>
          <Form.Item label="Address">
            <Form.Item name="street" rules={[{ required: true }]}>
              <Input
                placeholder="Street"
                onChange={(e) =>
                  setAddress({ ...address, street: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item name="suite" rules={[{ required: true }]}>
              <Input
                placeholder="Suite"
                onChange={(e) =>
                  setAddress({ ...address, suite: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item name="city" rules={[{ required: true }]}>
              <Input
                placeholder="City"
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item name="zipcode" rules={[{ required: true }]}>
              <Input
                placeholder="Zipcode"
                onChange={(e) =>
                  setAddress({ ...address, zipcode: e.target.value })
                }
              />
            </Form.Item>
          </Form.Item>

          <Form.Item
            wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
            style={{ margin: "0px" }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddUserModal;
