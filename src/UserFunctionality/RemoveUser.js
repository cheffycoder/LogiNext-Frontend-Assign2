import { DeleteUserAPI } from "../Service/ApiHandler";

const RemoveUser = async (userId, Users, setUsers) => {
  try {
    console.log("removing user");
    await DeleteUserAPI(userId);
    alert("User Deleted");
    setUsers(Users.filter((user) => user.id !== userId));
  } catch (error) {
    console.log(error);
  }
};

export default RemoveUser;
