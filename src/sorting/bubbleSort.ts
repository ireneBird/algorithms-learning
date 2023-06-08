class BubbleSort {
  #arr: Array<any>;
  #countElements: number;

  constructor(max?: number) {
    this.#arr = new Array(max);
    this.#countElements = 0;
  }

  push(el: any) {
    this.#arr[this.#countElements] = el;
    this.#countElements++;
  }

  bubbleSort() {
    let out, inner;
    for (out = this.#countElements - 1; out > 1; out--) {
      for (inner = 0; inner < out; inner++) {
        if (this.#arr[inner] > this.#arr[inner + 1]) {
          const temp = this.#arr[inner];
          this.#arr[inner] = this.#arr[inner + 1];
          this.#arr[inner + 1] = temp;
        }
      }
    }
  }

  public get() {
    return this.#arr;
  }
}

const ar = new BubbleSort(5);
ar.push(3);
ar.push(10);
ar.push(1);
ar.push(0);
ar.push(4);

console.log(ar.get());
ar.bubbleSort();

console.log(ar.get());
