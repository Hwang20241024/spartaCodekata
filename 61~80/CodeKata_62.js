// JadenCase 문자열 만들기

function solution(s) {
  return s
    .toLowerCase() // 모든 문자를 소문자로 변환
    .split(" ") // 공백 기준으로 문자열 나누기
    .map((word) => {
      // 단어의 첫 글자를 대문자로 변환하고 나머지를 그대로 둠
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" "); // 다시 공백으로 연결
}
