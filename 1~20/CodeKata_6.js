//// 하샤드 수

function solution(x) {
    let sumOfDigits = 0;
    let originalX = x;

    // 자릿수 합 구하기
    while (x > 0) {
        sumOfDigits += x % 10;  // x의 마지막 자릿수 더하기
        x = Math.floor(x / 10);  // 마지막 자릿수 제거
    }

    // 하샤드 수 검사: 자릿수 합으로 나누어 떨어지면 true, 아니면 false
    return originalX % sumOfDigits === 0;
}

solution(12);