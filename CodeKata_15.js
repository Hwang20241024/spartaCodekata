//// 가운데 글자 가져오기
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 6   12 34 56
//10   56

// 5  12 3 45
// 9  1234 5 6789

// 내가 푼거
function solution(s) {
  let num = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    // 짝수일때
    return s[num - 1] + s[num];
  } else {
    // 홀수일때
    return s[num];
  }
}
// 다른사람
function solution2(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}