import { DeleteUserAPI } from "../services/apiHandler";

const RemoveUser = async (userId, CurrentPage, fetchpage) => {
  try {
    await DeleteUserAPI(userId);
    alert("User Deleted");
    fetchpage(CurrentPage);
  } catch (error) {
    console.log(error);
  }
};

export default RemoveUser;
