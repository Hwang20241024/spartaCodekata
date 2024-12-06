//// 2016년
/*
문제 설명
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, 
solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 
SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 
날짜는 주어지지 않습니다)
입출력 예
a	b	result
5	24	"TUE"

윤년 : 윤년은 4로 나누어떨어지지만, 
100으로는 나누어떨어지지 않거나 400으로 나누어떨어지는 해

1월: 31일
2월: 29일 (윤년이라 29일까지)
3월: 31일
4월: 30일
5월: 31일
6월: 30일
7월: 31일
8월: 31일
9월: 30일
10월: 31일
11월: 30일
12월: 31일

*/

// 이거 결국에는 월 일 넣으면 요일을 출력.
// 이건 상식이였던 걸까 1월1일은 금요일이라고 하더라. 나는 몰랐다.
// 윤년은 하루 더 많기에 366 1부터 금요일으로 계산 

function solution(a, b) {
  let date = new Date(2016, a - 1, b); 

  let dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return dayOfWeek[date.getDay()];
}


function solution2(a, b) {
  let monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  let dayOfWeek = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];  // 시작은 금요일부터
  
  let totalDays = 0;
  
  for (let i = 0; i < a - 1; i++) {
      totalDays += monthDays[i];
  }
  
  totalDays += b;

  return dayOfWeek[totalDays % 7];
}