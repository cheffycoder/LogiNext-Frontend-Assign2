import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import removeUser from "../../functionalities/removeUser";
import actionNotification from "../actionNotification";

const { confirm } = Modal;

const confirmUserDeletion = (userId, currentPage, fetchPage) => {
  confirm({
    title: "Delete Confirmation",
    icon: <ExclamationCircleOutlined />,
    content: "Do you want to delete this user?",
    okText: "Yes",
    cancelText: "No",
    onOk() {
      removeUser(userId, currentPage, fetchPage);
      actionNotification("deleted", null);
    },
  });
};

export default confirmUserDeletion;
