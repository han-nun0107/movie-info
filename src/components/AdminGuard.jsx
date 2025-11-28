import { useSupabaseSession } from "../provider/supabaseProvider";
import { isAdmin } from "@/utils/isAdmin";

export const AdminGuard = ({ children }) => {
  const { session } = useSupabaseSession();
  const userId = session?.user.id;

  if (!userId) return <p>로그인 필요</p>;
  if (!isAdmin(userId)) return <p>관리자 권한이 없습니다.</p>;

  return <>{children}</>;
};
