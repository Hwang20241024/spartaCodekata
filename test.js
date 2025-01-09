function solution(tickets) {
  // 1. 티켓을 출발지 -> 도착지로 정렬하여 그래프 준비
  const graph = {};

  // 각 공항에서 이동할 수 있는 공항을 배열로 저장
  for (let ticket of tickets) {
    const [from, to] = ticket;
    if (!graph[from]) {
      graph[from] = [];
    }
    graph[from].push(to);
  }

  // 각 공항에서 이동할 수 있는 공항들을 알파벳 순으로 정렬
  for (let airport in graph) {
    graph[airport] = quickSort(graph[airport]);
  }

  // 2. DFS를 사용하여 경로 찾기
  const route = [];

  function dfs(airport) {
    // 경로가 완성되었으면 true 반환
    if (route.length === tickets.length + 1) {
      return true;
    }

    // 해당 공항에서 갈 수 있는 공항들이 없으면 종료
    if (!graph[airport]) {
      return false;
    }

    // 가능한 공항들을 하나씩 시도
    for (let nextAirport of graph[airport]) {
      const index = graph[airport].indexOf(nextAirport);
      graph[airport].splice(index, 1); // 공항을 하나 꺼냄
      route.push(nextAirport);

      // 다음 공항으로 DFS
      if (dfs(nextAirport)) {
        return true;
      }

      // 되돌려놓기 (백트래킹)
      graph[airport].push(nextAirport); // 공항을 다시 삽입
      route.pop(); // 경로에서 공항 제거
    }

    return false;
  }

  // 3. "ICN"에서 시작하여 경로 찾기
  route.push("ICN");
  dfs("ICN");

  return route;
}

// 퀵쇼트
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(
  solution([
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
  ])
);
console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);

// [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]
