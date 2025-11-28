export function isAdmin(userId) {
  const adminUuids = import.meta.env.VITE_ADMIN_UUIDS || "";
  const adminList = adminUuids
    .split(",")
    .map((uuid) => uuid.trim())
    .filter(Boolean);
  return !!userId && adminList.includes(userId);
}
