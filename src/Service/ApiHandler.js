import axiosClient from "./ApiClient";

export function getAllUsers() {
  return axiosClient.get("/fetch-users");
}

export function getUsersPageAPI(pageNo) {
  return axiosClient.get(`/fetch-users-page?page-no=${pageNo}`);
}

export function DeleteUserAPI(userId) {
  return axiosClient.delete(`/delete-user/${userId}`);
}

export function UpdateLikeAPI(userId, isLiked) {
  return axiosClient.patch(`/update-like/${userId}`, isLiked);
}

export function UpdateDetailsAPI(userId, payLoad) {
  return axiosClient.patch(`/update-user-details/${userId}`, payLoad);
}
