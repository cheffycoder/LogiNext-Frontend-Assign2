import axiosClient from "./ApiClient";

export function getAllUsers() {
  return axiosClient.get("/fetch-users");
}

export function deleteUser(userId) {
  return axiosClient.delete(`/delete-user/${userId}`);
}

export function UpdateLike(userId, isLiked) {
  return axiosClient.patch(`/update-like/${userId}`, isLiked);
}

export function UpdateDetails(userId, payLoad) {
  return axiosClient.patch(`/update-user-details/${userId}`, payLoad);
}
