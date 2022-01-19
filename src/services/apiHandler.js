import axiosClient from "./apiClient";

export function getAllUsers() {
  return axiosClient.get("/fetch-users");
}

export function getUsersPageAPI(pageno) {
  return axiosClient.get(`/fetch-users-page?page-no=${pageno}`);
}

export function DeleteUserAPI(userid) {
  return axiosClient.delete(`/delete-user/${userid}`);
}

export function UpdateLikeAPI(userid, isliked) {
  return axiosClient.patch(`/update-like/${userid}`, isliked);
}

export function UpdateDetailsAPI(userId, payload) {
  return axiosClient.patch(`/update-user-details/${userId}`, payload);
}

export function AddUserAPI(payload) {
  return axiosClient.post("/add-user", payload);
}
