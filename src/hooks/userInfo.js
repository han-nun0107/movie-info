import { useContext, useEffect } from "react";
import { useSupabaseAuth } from "../auth";
import { MovieContext } from "../context/movieContext";

export function useUserInfo() {
  const { setUserInfo, setIsLogin } = useContext(MovieContext);
  const { getUserInfo } = useSupabaseAuth();
  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUserInfo();
      const user = res?.user;

      if (user) {
        setUserInfo({
          id: user?.id,
          email: user?.email,
          name: user?.name,
          avatar_url: user?.avatar_url,
        });
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    };

    fetchUser();
  }, []);
}
