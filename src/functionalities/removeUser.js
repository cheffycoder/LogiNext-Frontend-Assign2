import { DeleteUserAPI } from "../services/apiHandler";

const RemoveUser = async (userId, CurrentPage, fetchPage) => {
  try {
    await DeleteUserAPI(userId);
    alert("User Deleted");
    fetchPage(CurrentPage);
  } catch (error) {
    console.log(error);
  }
};

export default RemoveUser;
