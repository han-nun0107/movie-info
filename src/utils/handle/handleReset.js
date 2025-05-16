import supabase from "../../../supabaseClient";

export const handleReset = async (userInfo, setLikeMovies) => {
  if (!userInfo?.id) return;

  const { error } = await supabase
    .from("likes")
    .delete()
    .eq("user_id", userInfo.id);

  if (error) {
    console.error("좋아요 초기화 실패", error);
    return;
  }

  setLikeMovies([]);
};
