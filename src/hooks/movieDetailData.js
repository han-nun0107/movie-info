import { useEffect } from "react";
import { useSupabaseAuth } from "../auth";

export function useMovieDetailData(setUserInfo, setIsLogin) {
  const { getUserInfo } = useSupabaseAuth();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUserInfo();
      const user = res?.user;

      if (user) {
        setUserInfo((prev) => ({
          ...prev,
          id: user?.id,
          email: user?.email,
          userName: user?.user_metadata?.userName,
          avatar_url: user?.user_metadata?.avatar_url,
        }));
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    };

    fetchUser();
  }, []);
}
