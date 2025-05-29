import { toast } from "react-toastify";
import { supabaseClient } from "../../../context";

export const handleKaKaoLogin = async (loginWithKakao) => {
  await supabaseClient.auth.signOut();
  try {
    const redirectUrl = "https://movie-info.vercel.app";
    await loginWithKakao(redirectUrl);
  } catch {
    toast.error("카카오 로그인 실패");
  }
};

export const handleGoogleLogin = async (loginWithGoogle) => {
  try {
    const redirectUrl = "https://movie-info-sooty.vercel.app/";
    await loginWithGoogle(redirectUrl);
  } catch {
    toast.error("구글 로그인 실패");
  }
};
