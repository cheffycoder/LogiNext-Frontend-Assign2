import { UpdateLikeAPI } from "../Service/ApiHandler";

const ToggleLike = (userId, isLiked, setIsLiked) => {
  if (isLiked) {
    setIsLiked(false);
    UpdateLikeAPI(userId, !isLiked);
  } else {
    setIsLiked(true);
    UpdateLikeAPI(userId, !isLiked);
  }
};

export default ToggleLike;
