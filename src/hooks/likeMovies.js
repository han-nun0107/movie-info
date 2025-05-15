import { useEffect } from "react";
import supabase from "../../supabaseClient";

export function useLikeMovies(userInfo, id, setIsLiked) {
  useEffect(() => {
    const checkLiked = async () => {
      if (!userInfo) return;

      const { data } = await supabase
        .from("likes")
        .select("id")
        .eq("user_id", userInfo.id)
        .eq("movie_id", id)
        .maybeSingle();

      if (data) setIsLiked(true);
    };
    checkLiked();
  }, [userInfo, id]);
}
