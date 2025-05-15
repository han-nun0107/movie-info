import { useEffect } from "react";

export function useMyPageLoginCheck(userInfo, navigate) {
  useEffect(() => {
    if (userInfo === null) {
      alert("로그인 해주세요");
      navigate("/login");
    }
  }, []);
}
