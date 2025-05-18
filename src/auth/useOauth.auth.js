import { useSupabase } from "../context";

export const useOAuth = () => {
  const supabase = useSupabase();
  // 카카오 로그인
  const loginWithKakao = async (...otherOptions) => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: "kakao",
        options: {
          ...otherOptions,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  // 구글 로그인
  const loginWithGoogle = async (redirectTo = null, ...otherOptions) => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo,
          ...otherOptions,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  return { loginWithKakao, loginWithGoogle };
};
