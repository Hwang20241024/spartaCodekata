//// 자연수 뒤집어 배열로 만들기 ////
// 문제 : 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 답안 01
function solution(n) {
    // 숫자형을 문자열로 변환 그리고 각자리로 분할 뒤집고 맵으로 숫자로 바꿈.
    let answer = String(n).split('').reverse().map(Number);
    return answer;
}

console.log(solution(12345));