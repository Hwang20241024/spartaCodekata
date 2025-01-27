//// 신고 결과 받기

function solution(id_list, report, k) {
  // 신고 내역 중복 제거
  const uniqueReports = [...new Set(report)];

  // 각 유저별 신고당한 횟수를 저장할 객체
  const reportedCount = {};
  id_list.forEach((user) => (reportedCount[user] = 0));

  // 각 유저가 신고한 유저 리스트를 저장할 객체
  const userReports = {};
  id_list.forEach((user) => (userReports[user] = []));

  // 신고 내역 처리
  uniqueReports.forEach((entry) => {
    const [user, reportedUser] = entry.split(" ");
    if (!userReports[user].includes(reportedUser)) {
      userReports[user].push(reportedUser);
      reportedCount[reportedUser] += 1;
    }
  });

  // 정지된 유저 리스트
  const bannedUsers = Object.keys(reportedCount).filter(
    (user) => reportedCount[user] >= k
  );

  // 결과 메일 수 계산
  const result = id_list.map((user) => {
    return userReports[user].filter((reportedUser) =>
      bannedUsers.includes(reportedUser)
    ).length;
  });

  return result;
}
