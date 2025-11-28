import { useOAuth } from "../../auth/useOauth.auth";
import { handleGoogleLogin } from "../../utils/handle/snsLogin/snsLogin";

export default function GoogleLogin() {
  const { loginWithGoogle } = useOAuth();

  return (
    <img
      src="/assets/web_light_rd_ctn@1x.png"
      alt="구글 로그인 버튼"
      onClick={() => {
        handleGoogleLogin(loginWithGoogle);
      }}
      className="cursor-pointer"
    />
  );
}
