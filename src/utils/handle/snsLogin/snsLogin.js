import { supabaseClient } from "../../../context";

export const handleKaKaoLogin = async (loginWithKakao) => {
  await supabaseClient.auth.signOut();
  try {
    const redirectUrl = "https://movie-info.vercel.app";
    await loginWithKakao(redirectUrl);
  } catch (error) {
    console.error("카카오 로그인 실패:", error.message);
  }
};

export const handleGoogleLogin = async (loginWithGoogle) => {
  try {
    const redirectUrl = "https://movie-info-sooty.vercel.app/";
    await loginWithGoogle(redirectUrl);
  } catch (error) {
    console.error("구글 로그인 실패:", error.message);
  }
};
