import { useEffect } from "react";
import { toast } from "react-toastify";

export function useMyPageLoginCheck(userInfo, navigate) {
  useEffect(() => {
    if (userInfo === null) {
      toast.warn("로그인 해주세요", { toastId: "PageLoginCheck" });
      navigate("/login");
    }
  }, []);
}
