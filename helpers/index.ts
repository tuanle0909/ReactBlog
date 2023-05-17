export const formatPostDate = (date: string) => {
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const time = new Date(date);
  const dayOfMonth = time.getDate();
  const year = time.getFullYear();
  return `${month[time.getMonth()]} ${dayOfMonth}, ${year}`;
}
//day js
export const getTimeSince = (date: string) => {
  let seconds: number = Math.floor((Date.now() - Date.parse(date)) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " năm trước";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " tháng trước";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " ngày trước";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " giờ trước";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " phút trước";
  }
  return Math.floor(seconds) + " giây trước";

}