//// 없는 숫자 더하기
// 문제 : 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.

// 첫번쨰 풀이.
function solution(numbers) {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // 0부터 9까지 모든 숫자
  let answer = 0;

  for (let value1 of arr) {
    let count = 0;
    for (let value2 of numbers) {
      if (value1 === value2) {
        count++; // numbers에 해당 숫자가 있으면 count 증가
      }
    }

    if (count === 0) {
      answer += value1;
    }
  }
  return answer;
}

// 두번째.
function solution2(numbers) {
    const totalSum = 45; // 0부터 9까지의 합
    const numbersSum = numbers.reduce((acc, num) => acc + num, 0); // numbers의 합
    return totalSum - numbersSum;
}

