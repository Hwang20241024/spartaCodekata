// 공원 산책

function solution(park, routes) {
  // 공원의 크기
  const rows = park.length;
  const cols = park[0].length;

  // 시작 위치 찾기
  let startX = 0;
  let startY = 0;
  for (let i = 0; i < rows; i++) {
    const index = park[i].indexOf("S");
    if (index !== -1) {
      startX = i;
      startY = index;
      break;
    }
  }

  // 방향에 따른 이동 값 설정
  const directions = {
    N: [-1, 0], // 북쪽
    S: [1, 0], // 남쪽
    W: [0, -1], // 서쪽
    E: [0, 1], // 동쪽
  };

  // 명령 처리
  let currentX = startX;
  let currentY = startY;

  for (const route of routes) {
    const [op, stepsStr] = route.split(" ");
    const steps = parseInt(stepsStr, 10);
    const [dx, dy] = directions[op];

    // 이동이 가능한지 확인
    let nextX = currentX;
    let nextY = currentY;
    let validMove = true;

    for (let i = 0; i < steps; i++) {
      nextX += dx;
      nextY += dy;

      // 공원을 벗어나거나 장애물에 부딪히면 이동 불가
      if (
        nextX < 0 ||
        nextX >= rows ||
        nextY < 0 ||
        nextY >= cols ||
        park[nextX][nextY] === "X"
      ) {
        validMove = false;
        break;
      }
    }

    // 유효한 이동인 경우 위치 업데이트
    if (validMove) {
      currentX = nextX;
      currentY = nextY;
    }
  }

  return [currentX, currentY];
}
