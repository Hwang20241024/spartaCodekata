//// 성격 유형 검사기


function solution(survey, choices) {
    // 1. 점수 저장을 위한 객체
    const scoreMap = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

    // 2. 점수 계산
    survey.forEach((pair, index) => {
        const [type1, type2] = pair; // 비동의 유형과 동의 유형
        const choice = choices[index];

        if (choice < 4) { // 비동의
            scoreMap[type1] += 4 - choice;
        } else if (choice > 4) { // 동의
            scoreMap[type2] += choice - 4;
        }
    });

    // 3. 최종 성격 유형 결정
    let result = "";
    result += scoreMap.R >= scoreMap.T ? "R" : "T";
    result += scoreMap.C >= scoreMap.F ? "C" : "F";
    result += scoreMap.J >= scoreMap.M ? "J" : "M";
    result += scoreMap.A >= scoreMap.N ? "A" : "N";

    // 4. 결과 반환
    return result;
}