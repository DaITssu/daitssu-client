/**
 * 해당 날짜로부터 현재 시간이 얼만큼 떨어져 있는지 확인하는 함수
 * @param date
 * @returns 'X분 전', 'X시간 전', 'X일 전' 형태의 문자열
 */
export function beforeTime(date: string) {
  const now = new Date();
  const created = new Date(date);
  const diff = now.getTime() - created.getTime();
  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (diffDay === 0) {
    const diffHour = Math.floor(diff / (1000 * 60 * 60));
    if (diffHour === 0) {
      const diffMin = Math.floor(diff / (1000 * 60));
      return `${diffMin}분 전`;
    }
    return `${diffHour}시간 전`;
  }
  return `${diffDay}일 전`;
}
/**
 * 두 날짜가 같은 날인지 확인하는 함수
 * @param date1
 * @param date2
 * @returns boolean 변수
 */
export const isSameDate = (date1: Date, date2: Date) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};
