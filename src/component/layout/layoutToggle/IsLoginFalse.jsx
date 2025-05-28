import { Link } from "react-router-dom";

export default function IsLoginFalse() {
  return (
    <div>
      <Link to="/login" className={`${btnColor}`}>
        로그인
      </Link>
      <Link to="/join" className={`${btnColor}`}>
        회원가입
      </Link>
    </div>
  );
}
const btnColor =
  "bg-purple-300 text-white rounded px-2 py-2 cursor-pointer ml-3 hover:bg-purple-600 active:bg-purple-900";
