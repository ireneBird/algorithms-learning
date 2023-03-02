class selectSortArray {
  #arr: Array<any>;
  #countElement: number;

  constructor(max: number) {
    this.#arr = new Array(max);
    this.#countElement = 0;
  }

  push(el: any) {
    this.#arr[this.#countElement] = el;
    this.#countElement++;
  }

  selectionSort() {
    let inner, outer, min;

    for (outer = 0; outer < this.#countElement - 1; outer++) {
      min = outer;

      for (inner = outer + 1; inner < this.#countElement; inner++) {
        if (this.#arr[inner] < this.#arr[min]) {
          min = this.#arr[inner];
        }
      }

      this.swap(outer, min);
    }
  }

  swap(one: number, two: number) {
    const temp = this.#arr[one];
    this.#arr[one] = this.#arr[two];
    this.#arr[two] = temp;
  }

  public get() {
    return this.#arr;
  }
}

const sort = new selectSortArray(6);
sort.push(2);
sort.push(0);
sort.push(5);
sort.push(1);
sort.push(34);
sort.push(7);

sort.selectionSort();

console.log(sort.get());
