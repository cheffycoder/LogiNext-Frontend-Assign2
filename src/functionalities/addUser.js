import { AddUserAPI } from "../services/apiHandler";

const addUser = async (
  currentPage,
  totalusers,
  fetchpage,
  setIsAddUserModalVisible,
  payload
) => {
  AddUserAPI(payload);
  // If currentpage is full then fetch next page
  if (currentPage * 4 === totalusers) {
    // console.log("fetching page in form submission", currentPage + 1);
    fetchpage(currentPage + 1);
  } else {
    // console.log(
    //   "fetching page in form submission in the else case",
    //   currentPage
    // );
    fetchpage(currentPage);
  }
  setIsAddUserModalVisible(false);
};

export default addUser;
