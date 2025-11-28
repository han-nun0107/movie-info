import { useOAuth } from "../../auth/useOauth.auth";
import { handleKaKaoLogin } from "../../utils/handle/snsLogin/snsLogin";

export default function KakaoLogin() {
  const { loginWithKakao } = useOAuth();

  return (
    <img
      src="/assets/kakao_login_medium_narrow.png"
      alt="카카오톡 로그인 버튼"
      onClick={() => {
        handleKaKaoLogin(loginWithKakao);
      }}
      className="cursor-pointer"
    />
  );
}
