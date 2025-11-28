import { Link } from "react-router-dom";

const btnColor =
  "bg-purple-300 text-white rounded px-3 py-2 text-sm sm:text-[8px] md:text-[12px] lg:text-[18px] cursor-pointer hover:bg-purple-600 active:bg-purple-900 w-full sm:w-auto text-center";

export default function IsLoginFalse() {
  return (
    <div className="flex flex-col justify-center sm:flex-row gap-2 sm:gap-3 sm:items-center w-full sm:w-auto">
      <Link to="/login" className={btnColor}>
        로그인
      </Link>
      <Link to="/join" className={btnColor}>
        회원가입123123
      </Link>
    </div>
  );
}
