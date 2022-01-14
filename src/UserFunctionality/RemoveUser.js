import { DeleteUserAPI } from "../Service/ApiHandler";

const RemoveUser = async (userId, fetchPage, CurrentPage) => {
  try {
    await DeleteUserAPI(userId);
    alert("User Deleted");
    // setUsers(Users.filter((user) => user.id !== userId));
    fetchPage(CurrentPage - 1);
    // setCurrentPage(CurrentPage);
  } catch (error) {
    console.log(error);
  }
};

export default RemoveUser;
