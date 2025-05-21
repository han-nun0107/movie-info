import { toast } from "react-toastify";
import supabase from "../../../supabaseClient";

export const handleChangeImage = async (
  uploadImg,
  setUserInfo,
  userInfo,
  setChangeImg
) => {
  if (!uploadImg) {
    toast.warn("사진을 선택 해주세요", { toastId: "ChangeImg" });
    return;
  }

  const fileExt = uploadImg.name.split(".").pop(); // 111.jpg 기준 -> . 제거 ["111", "jpg"]로 분리 -> jpg만 추출
  const fileName = `${Date.now()}.${fileExt}`; // 현재 시간.jpg를 사용하여 이름이 겹치지 않게 설정
  const filePath = `avatars/${fileName}`; // avatarImg라는 폴더 안에 fileName을 넣음

  // 스토리지 업로드
  const { data, error: storageImg } = await supabase.storage
    .from("avatars")
    .upload(filePath, uploadImg, {
      cacheControl: "3600",
      upsert: false,
    });
  if (storageImg) {
    toast.error("이미지 업로드 실패");
    return;
  }
  toast.success("이미지 업로드 성공");

  //스토리지 꺼내기
  const { data: urlData } = supabase.storage
    .from("avatars")
    .getPublicUrl(filePath);
  const publicUrl = urlData?.publicUrl;
  if (!publicUrl) {
    toast.error("스토리지에서 이미지 가져오기 실패");
    return;
  }

  //이미지 업데이트
  const { error: ChangeImgErr } = await supabase.auth.updateUser({
    data: { avatar_url: publicUrl },
  });
  if (ChangeImgErr) {
    console.error("이미지 변경 실패", ChangeImgErr);
  }
  setUserInfo({ ...userInfo, avatar_url: publicUrl });
  setChangeImg("");
};

export const handleUserProfileChange = (e, { setUploadImg }) => {
  const { files } = e.target;
  const uploadFile = files[0];
  setUploadImg(uploadFile);
};
