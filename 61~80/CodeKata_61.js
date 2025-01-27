// 최대값과 최솟값

function solution(s) {
  // 문자열을 공백으로 분리하여 숫자 배열로 변환
  const numbers = s.split(" ").map(Number);

  // 최소값과 최대값 계산
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  // "(최소값) (최대값)" 형식으로 반환
  return `${min} ${max}`;
}
