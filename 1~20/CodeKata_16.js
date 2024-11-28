//// 수박수박수박수박수박수?
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, 
// solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 
// "수박수"를 리턴하면 됩니다.

// 내가푼거
function solution(n) {
    let answer = '';
    
    for(let i = 0; i < n; i++){
        if (i % 2 === 0 || i === 0) {
            answer += "수";
        } else {
            answer += "박";         
        }
    }
    return answer;
}

// 다른사람이 푼거1
function solution2(n) {
    return "수박".repeat(Math.ceil(n / 2)).substring(0, n);
}

// 다른사람이 푼거2 
function solution3(n) {
    return "수박".repeat(n / 2) + (n % 2 ? "수" : "");
}