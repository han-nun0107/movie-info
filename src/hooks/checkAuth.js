import { useContext, useEffect } from "react";
import { MovieContext } from "../context/movieContext";
import { useSupabaseAuth } from "../auth";

export function useCheckAuth() {
  const { setUserInfo, setIsLogin } = useContext(MovieContext);
  const { getUserInfo } = useSupabaseAuth();

  useEffect(() => {
    const userInfo = async () => {
      const user = await getUserInfo();
      if (user?.user) {
        setUserInfo(user.user);
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    };
    userInfo();
  }, []);
}
