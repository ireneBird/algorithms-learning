class PriorityQueue {
  #queue: Array<number>;
  #nElem: number;
  #maxSize: number;

  constructor(max: number) {
    this.#maxSize = max;
    this.#queue = new Array(this.#maxSize);
    this.#nElem = 0;
  }

  insert(elem: number) {
    let i;

    if (this.#nElem == 0) {
      this.#queue[this.#nElem++] = elem;
    } else {
      for (i = this.#nElem - 1; i >= 0; i--) {
        if (elem > this.#queue[i]) {
          this.#queue[i + 1] = this.#queue[i];
        } else break;
      }
      this.#queue[i + 1] = elem;
      this.#nElem++;
    }
  }

  remove() {
    return this.#queue[--this.#nElem];
  }

  peekMin() {
    return this.#queue[this.#nElem - 1];
  }

  isEmpty() {
    return this.#nElem === 0;
  }

  isFull() {
    return this.#maxSize === this.#nElem;
  }
}

// const queue = new PriorityQueue(5);
// queue.insert(2);
// queue.insert(45);
// queue.insert(12);
// queue.insert(6);
// queue.insert(3);

// const ans = [];
// while (!queue.isEmpty()) {
//   ans.push(queue.remove());
//   console.log(ans);
// }
