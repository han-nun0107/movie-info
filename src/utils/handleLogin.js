import supabase from "../../supabaseClient";

export const handleLogin = async (e, { setIsLogin, navigate }) => {
  e.preventDefault();

  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert("로그아웃 실패: " + error.message);
      console.error("로그아웃 오류", error);
      return;
    }

    alert("로그아웃 성공");
    setIsLogin(false);
    navigate("/");
  } catch (err) {
    alert("로그아웃 중 오류");
    console.error("오류:", err);
  }
};
