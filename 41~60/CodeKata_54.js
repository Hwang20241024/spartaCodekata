//// 햄버거 만들기

function solution(ingredient) {
  let stack = [];
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]); // 재료를 스택에 추가

    // 스택의 마지막 4개가 [빵, 야채, 고기, 빵]인지 확인
    if (
      stack.length >= 4 &&
      stack[stack.length - 4] === 1 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 1] === 1
    ) {
      count++; // 햄버거 1개 완성
      stack.splice(stack.length - 4, 4); // 완성된 햄버거는 스택에서 제거
    }
  }

  return count;
}
