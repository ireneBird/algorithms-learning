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
    for (out = 0; out < this.#countElements; out++) {
      for (inner = out + 1; inner < this.#countElements; inner++) {
        if (this.#arr[out] > this.#arr[inner]) {
          const temp = this.#arr[out];
          this.#arr[out] = this.#arr[inner];
          this.#arr[inner] = temp;
        }
      }
    }
  }

  public get() {
    return this.#arr;
  }
}

// const arr = new BubbleSort(5);
// arr.push(3);
// arr.push(10);
// arr.push(1);
// arr.push(0);
// arr.push(4);

// console.log(arr.get());
// arr.bubbleSort();

// console.log(arr.get());
