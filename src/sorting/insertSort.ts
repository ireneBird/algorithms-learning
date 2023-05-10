class InsertSort {
  #arr: Array<number>;
  #countElements: number;

  constructor(max: number) {
    this.#arr = new Array(max);
    this.#countElements = 0;
  }

  push(el: number) {
    this.#arr[this.#countElements++] = el;
  }

  insertionSort() {
    let out, inner;

    for (out = 1; out < this.#countElements; out++) {
      const temp = this.#arr[out];
      inner = out;

      while (inner > 0 && this.#arr[inner - 1] > temp) {
        this.#arr[inner] = this.#arr[inner - 1];
        inner--;
      }

      this.#arr[inner] = temp;
    }
  }

  get() {
    return this.#arr;
  }
}

const arr = new InsertSort(5);
arr.push(3);
arr.push(10);
arr.push(1);
arr.push(0);
arr.push(4);

console.log(arr.get());
arr.insertionSort();

console.log(arr.get());
