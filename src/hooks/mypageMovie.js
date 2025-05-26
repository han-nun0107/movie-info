import { useEffect } from "react";
import supabase from "../../supabaseClient";

export function useMyPageMovies(userInfo, setLikeMovies) {
  useEffect(() => {
    const fetchLikedMovies = async () => {
      if (!userInfo?.id) return;

      const { data, error } = await supabase
        .from("likes")
        .select("*")
        .eq("user_id", userInfo.id);

      if (error) {
        console.error("좋아요 영화 가져오기 실패", error);
        return;
      }

      setLikeMovies(data);
    };

    fetchLikedMovies();
  }, []);
}
