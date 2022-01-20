import { DeleteUserAPI } from "../services/apiHandler";

// () => removeUser(user.id, currentPage, fetchPage)

const removeUser = async (userId, CurrentPage, fetchPage) => {
  try {
    // Request should come here from the Delete user modal after user clicks confirm
    await DeleteUserAPI(userId);
    // alert("User Deleted");
    fetchPage(CurrentPage);
  } catch (error) {
    console.log(error);
  }
};

export default removeUser;
