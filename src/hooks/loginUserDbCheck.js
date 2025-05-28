import { useContext, useEffect } from "react";
import { supabaseClient } from "../context";
import { MovieContext } from "../context/movieContext";

export const useLoginUserDbCheck = () => {
  const { setUserInfo } = useContext(MovieContext);

  useEffect(() => {
    const syncUser = async () => {
      const {
        data: { session },
      } = await supabaseClient.auth.getSession();
      const user = session?.user;
      if (!user) return;

      const provider = user.app_metadata?.provider;
      const isKakao = provider === "kakao";
      const isGoogle = provider === "google";

      // 구글이나 카카오가 아닐 경우 중단
      if (!isKakao && !isGoogle) return;

      const userId = user.id;
      const email = user.email;
      const name = user.user_metadata?.name || "이름 없음";
      const rawAvatar = user.user_metadata?.avatar_url || "";
      const avatar_url = rawAvatar.replace(/^http:\/\//, "https://");

      //  MovieContext에 저장
      setUserInfo({
        id: userId,
        email,
        name,
        avatar_url,
        isKakao,
      });

      const { error } = await supabaseClient.from("user_table").upsert(
        [
          {
            id: userId,
            email,
            name,
            avatar_url,
          },
        ],
        {
          onConflict: "id",
        }
      );
      if (error) console.error("user_table INSERT 실패:", error);
      else console.log("user_table INSERT 성공");
    };

    syncUser();
  }, []);
};
