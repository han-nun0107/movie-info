import { toast } from "react-toastify";
import supabase from "../../../supabaseClient";

export const handleLogin = async (
  e,
  { formData, setSubmit, login, setUserInfo, navigate }
) => {
  const { email, password } = formData;
  e.preventDefault();
  setSubmit(true);
  if (!formData.email || !formData.password) {
    return;
  }
  try {
    const result = await login({ email, password });
    if (result?.user) {
      toast.success("로그인 성공", { toastId: "LoginSuccess" });
      setUserInfo(result?.user);
      navigate("/");
    }
  } catch {
    toast.error("에러 발생", { toastId: "LoginError" });
  }
};

export const handleLogout = async (
  e,
  { setIsLogin, navigate, setUserInfo }
) => {
  e.preventDefault();

  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("로그아웃 실패", { toastId: "LogoutFail" });
      return;
    }
    localStorage.clear();
    sessionStorage.clear();
    toast.info("로그아웃 성공", { toastId: "LogoutSuccess" });
    setUserInfo(null);
    setIsLogin(false);
    navigate("/");
  } catch {
    toast.error("로그아웃 중 오류", { toastId: "LogoutError" });
  }
};
