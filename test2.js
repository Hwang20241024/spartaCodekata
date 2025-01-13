class MaxHeap {
  constructor() {
    this.heap = []; 
  }

  // 요소 삽입 메소드
  insert(value) {
    this.heap.push(value); 
    this.bubbleUp(); 
  }

  // 버블 업 메소드 - 이 메소드를 채워넣으세요!
  bubbleUp() {
    let index = this.heap.length - 1; // 삽입된 노드의 인덱스
    let parentIndex = Math.floor((index - 1) / 2); // 부모 노드의 인덱스

    // 부모 노드와 비교하여 자리를 바꾸는 로직을 추가하세요!
    // 부모 노드가 존재하고, 현재 노드가 부모 노드보다 클 경우 반복
    while (parentIndex >= 0 && this.heap[index] > this.heap[parentIndex]) {
      // 현재 노드와 부모 노드의 값을 교환
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];

      // 인덱스를 부모 노드로 갱신하여 계속 비교
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  printHeap() {
    console.log(this.heap);
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(30);
maxHeap.insert(15);

maxHeap.printHeap(); 
