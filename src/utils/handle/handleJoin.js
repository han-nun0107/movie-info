import { toast } from "react-toastify";
import supabase from "../../../supabaseClient";

export const handleJoin = async (
  e,
  { setSubmit, formData, isPassword, signUp, navigate }
) => {
  e.preventDefault();
  setSubmit(true);

  const { email, name, password, confirmPassword } = formData;

  if (!email || !name || !password || !confirmPassword) return;

  if (!isPassword(password)) {
    toast.warn(
      "비밀번호는 영문 대소문자 + 숫자를 포함해 8자 이상이어야 합니다.",
      { toastId: "JoinPassword" }
    );
    return;
  }

  if (password !== confirmPassword) {
    toast.warn("비밀번호가 일치하지 않습니다.", {
      toastId: "JoinPasswordMissmatch",
    });
    return;
  }
  try {
    const result = await signUp({ email, password, name: name });

    if (result.user) {
      await supabase.from("user_table").insert({
        id: result.user.id,
        email: result.user.email,
        name: name,
        avatar_url:
          "https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295396_1280.png",
      });
      await supabase.auth.updateUser({
        data: {
          displayName: name,
        },
      });
      toast.success("회원가입 성공!", { toastId: "JoinSuccess" });
      navigate("/login");
    } else {
      toast.info("회원가입 실패", { toastId: "JoinFail" });
    }
  } catch {
    toast.error("가입 실패", { toastId: "JoinError" });
  }
};
