//// 문자열 내림차순으로 배치하기

// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 
//새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 
//대문자는 소문자보다 작은 것으로 간주합니다.

function solution(s) {
    // 소문자만 따로 뽑아서 내림차순 정렬
    let lower = s.split('').filter(c => c >= 'a' && c <= 'z').sort((a, b) => b.localeCompare(a)).join('');
    
    // 대문자만 따로 뽑아서 내림차순 정렬
    let upper = s.split('').filter(c => c >= 'A' && c <= 'Z').sort((a, b) => b.localeCompare(a)).join('');
    
    // 정렬된 소문자와 대문자를 합친 결과를 반환
    return lower + upper;
}
