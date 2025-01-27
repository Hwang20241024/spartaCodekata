//// 달리기 경주

function solution(players, callings) {
  // 선수 이름 -> 인덱스 매핑
  const name_to_index = {};
  for (let i = 0; i < players.length; i++) {
    name_to_index[players[i]] = i;
  }

  // callings에 따라 선수 위치 바꾸기
  for (let call of callings) {
    const index = name_to_index[call]; // 해당 선수의 현재 인덱스
    if (index > 0) {
      // 첫 번째 선수는 추월할 수 없으므로
      const prevPlayer = players[index - 1]; // 앞선 선수
      // 두 선수의 위치 변경
      players[index] = prevPlayer;
      players[index - 1] = call;
      // 인덱스 맵 갱신
      name_to_index[call] = index - 1;
      name_to_index[prevPlayer] = index;
    }
  }

  return players;
}
