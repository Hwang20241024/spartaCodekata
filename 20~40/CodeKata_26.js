//// 3진법 뒤집기
/*
자연수 n이 매개변수로 주어집니다. 
n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 
return 하도록 solution 함수를 완성해주세요.

n은 1 이상 100,000,000 이하인 자연수입니다.

*/

function solution(n) {
  // 3진법으로 변환화고 뒤집자.
  let answer = n.toString(3).split("").reverse().join("");
  // 10진법으로 변환.
  return parseInt(answer, 3);
}
