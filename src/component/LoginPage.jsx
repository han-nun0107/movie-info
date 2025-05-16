import { Link } from "react-router-dom";
import { LayoutInput } from "./layoutInput/LayoutInput";
import { useContext, useState } from "react";
import { MovieContext } from "../context/movieContext";
import { useSupabaseAuth } from "../auth";
import { handleLogin } from "../utils/handle/handleLogin";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [submit, setSubmit] = useState(false);
  const { navigate, setUserInfo } = useContext(MovieContext);
  const { login } = useSupabaseAuth();

  return (
    <div className="flex flex-col justify-center items-center gap-15 min-h-screen">
      <h1 className="text-[2rem] font-black">로그인</h1>
      <form
        onSubmit={(e) =>
          handleLogin(e, { formData, setSubmit, login, setUserInfo, navigate })
        }
      >
        <LayoutInput
          inputType="email"
          inputPlaceholder="xxxxxx@gmail.com 형식으로 작성해주세요"
          errorMassage="이메일 형식으로 작성해주세요"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          showError={submit && !formData.email}
        />
        <LayoutInput
          inputType="password"
          inputPlaceholder="영문 대문자/소문자 + 숫자의 조합 사용"
          errorMassage="비밀번호는 8자 이상이어야 합니다.."
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          showError={submit && !formData.password}
        />
        <button
          type="submit"
          className="
        bg-gray-500 
        text-[#fafafb] 
          w-lg h-12 
          cursor-pointer 
        hover:bg-gray-600 active:bg-gray-800"
        >
          로그인
        </button>
      </form>
      <p className="text-center">
        오즈무비가 처음이신가요?
        <span className="underline cursor-pointer">
          <Link to="/join">간편 가입</Link>
        </span>
      </p>
    </div>
  );
}
