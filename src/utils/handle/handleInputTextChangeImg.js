import { toast } from "react-toastify";
import supabase from "../../../supabaseClient";

export const handleInputTextChangeImg = async (
  changeImg,
  setUserInfo,
  userInfo,
  setChangeImg
) => {
  if (changeImg.trim() === "") {
    toast.warn("사진을 선택 해주세요", { toastId: "ChangeImg" });
    return;
  }
  const { error } = await supabase.auth.updateUser({
    data: { avatar_url: changeImg },
  });
  if (error) {
    toast.error("이미지 변경 실패");
  }
  toast.success("이미지 변경 성공");
  setUserInfo({ ...userInfo, avatar_url: changeImg });
  setChangeImg("");
};
