# Задачи

## Строки и массивы

### Уникальность всех символов в строке

Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы.

**Input**: String

**Output**: Boolean

```js
function isUnique(string) {
  // todo
}

console.log(isUnique("abcdef")); // -> true
console.log(isUnique("1234567")); // -> true
console.log(isUnique("abcABC")); // -> true
console.log(isUnique("abcadef")); // -> false
```

### Плоский массив

Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов. В результате должны получить новый одномерный массив.

**Input**: Array

**Output**: Array

```js
function flatten(array) {
  // todo
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]
```

### Удаление всех повторяющихся значений в строке

Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.

**Input**: String

**Output**: String

```js
function removeDupes(str) {
  // todo
}

console.log(removeDupes("abcd")); // -> 'abcd'
console.log(removeDupes("aabbccdd")); // -> 'abcd'
console.log(removeDupes("abcddbca")); // -> 'abcd'
console.log(removeDupes("abababcdcdcd")); // -> 'abcd'
```

### Какая строка встречается чаще всего

Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право.

**Input**: String[]

**Output**: String

```js
function highestFrequency(array) {
  // todo
}

console.log(highestFrequency(["a", "b", "c", "c", "d", "e"])); // -> c
console.log(highestFrequency(["abc", "def", "abc", "def", "abc"])); // -> abc
console.log(highestFrequency(["abc", "def"])); // -> abc
console.log(
  highestFrequency([
    "abc",
    "abc",
    "def",
    "def",
    "def",
    "ghi",
    "ghi",
    "ghi",
    "ghi",
  ])
); // -> ghi
```

### Повернута ли строка?

Напишите функцию, которая принимает 2 строки. Верните `true` если строки являются перевернутым вариантом друг друга (см. пример). Иначе верните `false`.

**Input**: String, String

**Output**: Boolean

```js
function isStringRotated(source, test) {
  // todo
}

console.log(isStringRotated("javascript", "scriptjava")); // -> true
console.log(isStringRotated("javascript", "iptjavascr")); // -> true
console.log(isStringRotated("javascript", "java")); // -> false
```

### Является ли массив подмножеством другого массива

Напишите функцию, которая проверяет, является ли второй массив подмножеством первого. То есть есть ли элементы второго массива в первом.

**Input**: Number[] & String[], Number[] & String[]

**Output**: Boolean

```js
function arraySubset(source, subset) {
  // todo
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])); // -> false
console.log(arraySubset([1, 2], [1, 2, 3])); // -> false
```

### Анаграммы

Напишите функцию, которая проверяет, являются ли все элементы в массиве анаграммами друг друга.

**Input**: String[]

**Output**: Boolean

```js
function allAnagrams(array) {
  // todo
}

console.log(allAnagrams(["abcd", "bdac", "cabd"])); // true
console.log(allAnagrams(["abcd", "bdXc", "cabd"])); // false
```

### Перевернуть матрицу 3х3

Напишите функцию, которая принимает матрицу 3х3 и переворачивает на 90 градусов по часовой стрелке.

**Дополнительно**: Напишите еще 2 функции, которые переворачивают матрицу на 180 и 270 градусов.

```
[1, 2, 3]    [7, 4, 1]
[4, 5, 6] -> [8, 5, 2]
[7, 8, 9]    [9, 6, 3]
```

**Input**: Number[][]

**Output**: Number[][]

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate(source) {
  // todo
}

console.log(rotate(matrix));
```

## Алгоритмы

### Простой поиск

Напишите функцию, которая принимает отсортированный массив с числами и число. Необходимо вернуть индекс числа, если оно есть в массиве. Иначе вернуть `-1`.

**Input**: Number[], Number

**Output**: Number

```js
function search(array, target) {
  // todo
}

console.log(search([1, 3, 6, 13, 17], 13)); // -> 3
console.log(search([1, 3, 6, 13, 17], 12)); // -> -1
```

### Сбалансированные скобки

Напишите функцию, которая проверит строку на сбалансированность скобок: `{}, (), []`. Вернуть `true` если они сбалансированы, иначе `false`.

**Input**: String

**Output**: Boolean

```js
function isBalanced(string) {
  // todo
}

console.log(isBalanced("(x + y) - (4)")); // -> true
console.log(isBalanced("(((10 ) ()) ((?)(:)))")); // -> true
console.log(isBalanced("[{()}]")); // -> true
console.log(isBalanced("(50)(")); // -> false
console.log(isBalanced("[{]}")); // -> false
```

### Очередь с О(1) сложностью операций

Создайте очередь, в которой буду реализованы операции на добавление элементов в конец очереди, удаление первого элемента и вычисление размера очереди с сложностью алгоритма `О(1)` .

```js
class Queue {
  constructor() {
    // todo
  }

  enqueue(item) {
    // todo: добавить элемент в конец очереди
  }

  dequeue() {
    // todo: удалить первый элемент из очереди
  }

  get size() {
    // todo: возвращает размер списка
    // нельзя использовать геттер
  }
}
```

## JavaScript

### Deep Equal

Напишите функцию, которая будет проверять на “глубокое” равенство 2 входящих параметра

**Inputs**: Any, Any

**Output**: Boolean

```js
function deepEqual(a, b) {
  // todo
}

const source = { a: 1, b: { c: 1 } };
const test1 = { a: 1, b: { c: 1 } };
const test2 = { a: 1, b: { c: 2 } };
console.log(deepEqual(source, test1)); // -> true
console.log(deepEqual(source, test2)); // -> false
console.log(deepEqual(NaN, NaN)); // -> true
console.log(deepEqual("test", "test!")); // -> false
console.log(deepEqual()); // -> true
```

### Последовательность Фибоначчи

<aside>
💡 [Последовательность Фибоначчи](https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D1%81%D0%BB%D0%B0_%D0%A4%D0%B8%D0%B1%D0%BE%D0%BD%D0%B0%D1%87%D1%87%D0%B8)

</aside>

Напишите функцию, которая будет генерировать последовательность Фиббоначи длинны `n`, которую передали как аргумент.

**Input**: Number

**Output**: Number[]

```js
function fibonacci(n) {
  // todo
}

console.log(fibonacci(8)); // -> [1, 1, 2, 3, 5, 8, 13, 21]
```

### Своя функция bind

<aside>
💡 [Функция Bind](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

</aside>

Реализуйте функцию `bind`.

**Input**: Object, arguments

**Output**: Function

- Дополнительные материалы
  [Урок 15. JavaScript. Все о Spread и Rest](https://youtu.be/SGeQ-U0G7dE)
  [Урок 2. JavaScript. Что такое контекст this. Как работает call, bind, apply](https://youtu.be/UGapN-hrekw)
  [Как создать свой bind (4 способа + call, apply)](https://youtu.be/fJqYa3BuwaU)
- Решение

  ```jsx
  Function.prototype.myBind = function (context, ...args) {
    return (...rest) => {
      return this.call(context, ...args.concat(rest));
    };
  };

  function log(...props) {
    console.log(this.name, this.age, ...props);
  }

  const obj = { name: "Vladilen", age: 28 };

  log.myBind(obj, 1, 2)();
  ```

### Универсальная сумма

Напишите функцию, которая складывает 2 числа. Работать функция должна как показано в примере ниже:

**Input**: Number, Number

**Output**: Number

```js
function add() {
  // todo
}

add(20, 22); // -> 42
add(20)(22); // -> 42
add(20)()(22); // -> 42
add(20)()()()(22); // -> 42
add(20)()()()()()()()()()()()(22); // -> 42
add()(20)(22); // -> 42
add()()()()(20)(22); // -> 42
add()(20)()(22); // -> 42
add()()()()()(20)()()()(22); // -> 42
```

### GroupBy

<aside>
💡 [Функция GroupBy](https://lodash.com/docs/4.17.15#groupBy)

</aside>

Напишите функцию `groupBy`.

**Input**: Number[] & String[], Function & String

**Output**: Object

```js
function groupBy() {
  // todo
}

groupBy([6.1, 4.2, 6.3], Math.floor); // -> { '4': [4.2], '6': [6.1, 6.3] }
groupBy(["one", "two", "three"], "length"); // -> { '3': ['one', 'two'], '5': ['three'] }
```
