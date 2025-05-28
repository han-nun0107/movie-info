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
    console.error("닉네임 변경 실패", updateAuthError);
  }
  setUserInfo({ ...userInfo, name: changeName });
  setChangeName("");
};
