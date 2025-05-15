import supabase from "../../supabaseClient";

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
      alert("로그인 성공");
      setUserInfo(result?.user);
      navigate("/");
    }
  } catch (err) {
    alert("에러 발생");
    console.log("에러 발생:", err);
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
      alert("로그아웃 실패: " + error.message);
      console.error("로그아웃 오류", error);
      return;
    }

    alert("로그아웃 성공");
    setUserInfo(null);
    setIsLogin(false);
    navigate("/");
  } catch (err) {
    alert("로그아웃 중 오류");
    console.error("오류:", err);
  }
};
