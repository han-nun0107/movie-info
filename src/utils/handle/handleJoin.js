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
    alert("비밀번호는 영문 대소문자 + 숫자를 포함해 8자 이상이어야 합니다.");
    return;
  }

  if (password !== confirmPassword) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }
  try {
    const result = await signUp({ email, password, userName: name });

    if (result.user) {
      await supabase.from("user_table").insert({
        id: result.user.id,
        email: result.user.email,
        userName: name,
        profile_image_url:
          "https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295396_1280.png",
      });
      alert("회원가입 성공!");
      navigate("/login");
    } else {
      alert("회원가입 실패");
    }
  } catch (err) {
    alert("가입 실패:" + err.message);
    console.log("가입 실패:", err);
  }
};
