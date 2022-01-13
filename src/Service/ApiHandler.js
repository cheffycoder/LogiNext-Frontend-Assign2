import axiosClient from "./ApiClient";

export function getAllUsers() {
  console.log("getting users from backend");
  return axiosClient.get("/fetch-users");
}

export function DeleteUserAPI(userId) {
  return axiosClient.delete(`/delete-user/${userId}`);
}

export function UpdateLike(userId, isLiked) {
  return axiosClient.patch(`/update-like/${userId}`, isLiked);
}

export function UpdateDetails(userId, payLoad) {
  return axiosClient.patch(`/update-user-details/${userId}`, payLoad);
}
