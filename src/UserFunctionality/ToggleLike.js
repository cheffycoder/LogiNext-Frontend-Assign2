import { UpdateLike } from "../Service/ApiHandler";

const ToggleLike = (userId, isLiked, setIsLiked) => {
  if (isLiked) {
    setIsLiked(false);
    UpdateLike(userId, !isLiked);
  } else {
    setIsLiked(true);
    UpdateLike(userId, !isLiked);
  }
};

export default ToggleLike;
