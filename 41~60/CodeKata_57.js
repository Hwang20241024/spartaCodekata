//// 개인정보 수집 유효기간

function solution(today, terms, privacies) {
    // 오늘 날짜를 Date 객체로 변환
    const todayDate = new Date(today.split('.').join('-'));

    // 약관 종류와 유효기간을 매핑
    const termDict = {};
    terms.forEach(term => {
        const [type, months] = term.split(' ');
        termDict[type] = parseInt(months);
    });

    const result = [];

    privacies.forEach((privacy, index) => {
        const [dateStr, termType] = privacy.split(' ');
        const [year, month, day] = dateStr.split('.').map(Number);

        // 개인정보 수집 날짜를 Date 객체로 변환
        let collectionDate = new Date(year, month - 1, day);

        // 약관에 해당하는 유효기간(개월)을 더함
        const monthsToAdd = termDict[termType];
        collectionDate.setMonth(collectionDate.getMonth() + monthsToAdd);

        // 유효기간이 지난 경우 파기해야 할 개인정보로 간주
        if (collectionDate <= todayDate) {
            result.push(index + 1);
        }
    });

    return result;
}
