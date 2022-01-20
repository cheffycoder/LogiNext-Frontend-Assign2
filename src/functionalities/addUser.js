import { AddUserAPI } from "../services/apiHandler";

const addUser = async (currentPage, totalUsers, fetchPage, payload) => {
  await AddUserAPI(payload);

  // If currentpage is full then fetch next page
  if (currentPage * 4 === totalUsers) {
    // console.log("fetching page in form submission", currentPage + 1);
    fetchPage(currentPage + 1);
  } else {
    // console.log(
    //   "fetching page in form submission in the else case",
    //   currentPage
    // );
    fetchPage(currentPage);
  }
};

export default addUser;
