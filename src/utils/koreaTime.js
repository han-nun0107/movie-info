export const koreaTime = () => {
  const now = new Date();
  const koreaTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return koreaTime.toISOString().replace("Z", "+09:00");
};
