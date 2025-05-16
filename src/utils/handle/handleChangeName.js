export const handleChangeName = async (
  changeName,
  setUserInfo,
  userInfo,
  setChangeName,
  supabase
) => {
  const { error: updateAuthError } = await supabase.auth.updateUser({
    data: { userName: changeName },
  });

  if (updateAuthError) {
    console.error("닉네임 변경 실패", updateAuthError);
  }
  setUserInfo({ ...userInfo, userName: changeName });
  setChangeName("");
};
