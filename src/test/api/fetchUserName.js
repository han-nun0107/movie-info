export async function fetchUserName() {
  const res = await fetch("/api/user");
  const data = await res.json();
  return data.name;
}
