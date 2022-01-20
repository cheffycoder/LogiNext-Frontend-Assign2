import { notification } from "antd";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";

// const { success } = Modal;
// const successNotification = () => {
//   success({
//     // title: "Add user notification",
//     content: "User added succesfully",
//   });
// };

const actionNotification = (verdict, username) => {
  let desc = null;
  let notiIcon = <CloseCircleTwoTone twoToneColor="red" />;
  if (verdict === "added") {
    notiIcon = <CheckCircleTwoTone twoToneColor="#52c41a" />;
    desc = `${username} is added.`;
  }
  const args = {
    message: `User ${verdict}`,
    description: desc,
    icon: notiIcon,
    duration: 1,
  };
  notification.open(args);
};

export default actionNotification;
