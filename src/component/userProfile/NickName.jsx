import { useContext } from "react";
import { MovieContext } from "../../context/movieContext";
import supabase from "../../../supabaseClient";

export default function NickName() {
  const { userInfo, changeName, setChangeName, setUserInfo } =
    useContext(MovieContext);

  const handleChangeName = async () => {
    if (changeName.trim() === "") {
      alert("이름을 적어주세요");
      return;
    }
    const { error } = await supabase.auth.updateUser({
      data: { userName: changeName },
    });

    if (error) {
      console.error("닉네임 변경 실패", error);
    }
    setUserInfo({ ...userInfo, userName: changeName });
    setChangeName("");
  };
  return (
    <div className="flex flex-col items-center gap-3">
      <div>
        <p className="text-3xl font-semibold">이름: {userInfo?.userName}</p>
      </div>
      <div>
        <input
          type="text"
          className="border w-[250px] h-10 rounded-2xl"
          value={changeName}
          placeholder="바꾸고 싶은 닉네임을 적어주세요"
          onChange={(e) => {
            setChangeName(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleChangeName();
            }
          }}
        />
        <button
          onClick={handleChangeName}
          className="cursor-pointer w-30 h-10 text-lg border rounded-2xl ml-2 bg-gray-300 hover:bg-gray-400 active:bg-gray-500"
        >
          닉네임 수정
        </button>
      </div>
    </div>
  );
}
