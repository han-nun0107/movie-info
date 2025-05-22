import { useOAuth } from "../../auth/useOauth.auth";

export default function KakaoLogin() {
  const { loginWithKakao } = useOAuth();

  const handleKaKaoLogin = async () => {
    try {
      const redirectUrl =
        "https://wygedmfowkvumtjsoglc.supabase.co/auth/v1/callback";
      await loginWithKakao(redirectUrl);
    } catch (error) {
      console.error("카카오 로그인 실패:", error.message);
    }
  };

  return (
    <button
      onClick={handleKaKaoLogin}
      className="cursor-pointer bg-amber-300 hover:bg-amber-400 text-black px-4 py-2 rounded"
    >
      카카오톡 로그인
    </button>
  );
}
