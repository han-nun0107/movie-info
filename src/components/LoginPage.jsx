import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { MovieContext } from "../context/movieContext";
import { useSupabaseAuth } from "../auth";
import { handleLogin } from "../utils/handle/handleLogin";
import KakaoLogin from "./anotherLogin/KakaoLogin";
import GoogleLogin from "./anotherLogin/GoogleLogin";
import { DetailButton } from "./button/Button";
import { JoinLoginInput } from "./layout/layoutInput/JoinLoginInput";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [submit, setSubmit] = useState(false);
  const { navigate, setUserInfo } = useContext(MovieContext);
  const { login } = useSupabaseAuth();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      <h1 className="text-[1.5rem] sm:text-[2rem] font-black mb-6">로그인</h1>
      <form
        onSubmit={(e) =>
          handleLogin(e, { formData, setSubmit, login, setUserInfo, navigate })
        }
        className="w-full max-w-lg flex flex-col gap-4"
      >
        <JoinLoginInput
          inputType="email"
          inputPlaceholder="xxxxxx@gmail.com 형식으로 작성해주세요"
          errorMassage="이메일 형식으로 작성해주세요"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          showError={submit && !formData.email}
        />
        <JoinLoginInput
          inputType="password"
          inputPlaceholder="영문 대문자/소문자 + 숫자의 조합 사용"
          errorMassage="비밀번호는 6자 이상이어야 합니다.."
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          showError={submit && !formData.password}
        />
        <DetailButton
          type={submit}
          className="bg-gray-500 text-[#fafafb] h-12 cursor-pointer hover:bg-gray-600 active:bg-gray-800"
          label={"로그인"}
        />
      </form>

      <div className="grid sm:flex-row gap-3 mt-6 w-full justify-center items-center">
        <KakaoLogin />
        <GoogleLogin />
      </div>

      <p className="text-center">
        오즈무비가 처음이신가요?
        <span className="cursor-pointer hover:underline text-blue-400 hover:text-blue-500 active:text-blue-600">
          <Link to="/join">간편 가입</Link>
        </span>
      </p>
    </div>
  );
}
