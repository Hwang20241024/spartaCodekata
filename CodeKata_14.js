//// 제일 작은 수 제거하기
// 문제 : 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, 
// solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

//제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
function solution(arr) {
    let min = Math.min(...arr);  // 배열에서 가장 작은 값 찾기
    let answer = arr.filter(value => value !== min);  // 최소값을 제외한 배열 생성

    // 만약 answer 배열이 비어 있다면 [-1]을 리턴
    if (answer.length === 0) {
        answer = [-1];
    }
    
    return answer;
}