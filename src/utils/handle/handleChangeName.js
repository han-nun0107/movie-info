import { toast } from "react-toastify";

export const handleChangeName = async (
  changeName,
  setUserInfo,
  userInfo,
  setChangeName,
  supabase
) => {
  const { error: updateAuthError } = await supabase.auth.updateUser({
    data: { name: changeName },
  });

  if (updateAuthError) {
    toast.error("닉네임 변경 실패");
  }
  setUserInfo({ ...userInfo, name: changeName });
  setChangeName("");
};
