import supabase from "../../supabaseClient";
import { koreaTime } from "./koreaTIme";

export const movieLikeButton = async ({
  userInfo,
  id,
  title,
  poster_path,
  vote_average,
  isLiked,
  setIsLiked,
}) => {
  if (!userInfo || !userInfo?.id) {
    alert("로그인 후 사용해주세요.");
    return;
  }

  if (isLiked) {
    await supabase
      .from("likes")
      .delete()
      .eq("user_id", userInfo.id)
      .eq("movie_id", id);
    setIsLiked(false);
    alert("좋아요 취소");
  } else {
    await supabase.from("likes").insert({
      user_id: userInfo.id,
      movie_id: id,
      movie_title: title,
      poster_path: poster_path,
      vote_average: vote_average,
      created_at: koreaTime(),
    });
    setIsLiked(true);
    alert("좋아요 추가");
  }
};
