//// 행렬의 덧셈
/*
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 
같은 열의 값을 서로 더한 결과가 됩니다. 
2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 
결과를 반환하는 함수, solution을 완성해주세요.

행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

*/


//map이라는 함수가 있다는거 같다 이번엔 그걸 활용해보자 
function solution(arr1, arr2) {

  
  // 문제는 길이을 안다고했지만 모른다고 가정해보자. 
  // (길이를 몰라도 두개의 배열이 길이가 같은 경우)
  // 반목문 돌려도 되는데 생소한거니깐 사용해보자.
  const result  = arr1.map((subArr, index) => {
    return subArr.map((value, subIndex) => {
        return value + arr2[index][subIndex];
    })
  }) 

  return result;
}
