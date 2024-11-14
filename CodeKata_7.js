//// 두 정수 사이의 합
//문제 : 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수,
//solution을 완성하세요. 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 첫번쨰.
function solution(a, b) {
  let answer = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
    return answer;
  } else {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
    return answer;
  }
}

// 두번째.
function solution2(a, b) {
  // a와 b가 정수이므로 작은 값을 start, 큰 값을 end로 설정
  let start = Math.min(a, b);
  let end = Math.max(a, b);

  // 등차수열의 합 공식 사용
  return ((end - start + 1) * (start + end)) / 2;
}
