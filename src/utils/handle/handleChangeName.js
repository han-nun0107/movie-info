export const handleChangeName = async (
  changeName,
  setUserInfo,
  userInfo,
  setChangeName,
  supabase
) => {
  /* const { error: updateTableError } = await supabase
      .from("user_table")
      .update({
        userName: changeName,
      })
      .eq("id", userInfo.id);

    if (updateTableError)
      return console.error("닉네임 변경 실패", updateTableError); */

  const { error: updateAuthError } = await supabase.auth.updateUser({
    data: { userName: changeName, profile_image_url: "" },
  });

  if (updateAuthError) {
    console.error("닉네임 변경 실패", updateAuthError);
  }
  setUserInfo({ ...userInfo, userName: changeName });
  setChangeName("");
};
