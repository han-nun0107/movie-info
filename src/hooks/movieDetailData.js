import { useEffect } from "react";
import { useSupabaseAuth } from "../auth";

export function useMovieDetailData(setUserInfo, setIsLogin) {
  const { getUserInfo } = useSupabaseAuth();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUserInfo();
      const user = res?.user;

      if (user) {
        setUserInfo({
          id: user.id,
          email: user.email,
          userName: user.userName,
          profileImageUrl: user.profileImageUrl,
        });
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    };

    fetchUser();
  }, []);
}
