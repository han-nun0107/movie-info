import { useContext, useState } from "react";
import { LayoutInput } from "./layoutInput/LayoutInput";
import { MovieContext } from "../context/movieContext";
import { useSupabaseAuth } from "../auth";
import { handleJoin } from "../utils/handleJoin";

export default function Join() {
  const { submit, setSubmit, navigate } = useContext(MovieContext);
  const { signUp } = useSupabaseAuth();

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const isPassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form
        onSubmit={(e) =>
          handleJoin(e, { setSubmit, formData, isPassword, signUp, navigate })
        }
        action=""
      >
        <LayoutInput
          labelName="이메일"
          inputType="email"
          inputPlaceholder="xxxxxx@gmail.com 형식으로 작성해주세요"
          errorMassage="이메일 형식으로 작성해주세요"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          showError={submit && !formData.email}
        />
        <LayoutInput
          labelName="이름"
          inputType="text"
          inputPlaceholder="2~8자, 숫자, 한글, 영어만 사용"
          errorMassage="이름을 입력해주세요"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          showError={submit && !formData.name}
        />
        <LayoutInput
          labelName="비밀번호"
          inputType="password"
          inputPlaceholder="영문 대문자/소문자 + 숫자의 조합 사용"
          errorMassage="비밀번호는 대소문자 + 숫자 포함, 8자 이상이어야 합니다."
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          showError={submit && !isPassword(formData.password)}
        />
        <LayoutInput
          labelName="비밀번호 확인"
          inputType="password"
          inputPlaceholder="위와 같은 비밀번호를 입력해주세요"
          errorMassage="비밀번호가 일치하지 않습니다."
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          showError={submit && formData.confirmPassword !== formData.password}
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
          회원가입
        </button>
      </form>
    </div>
  );
}
