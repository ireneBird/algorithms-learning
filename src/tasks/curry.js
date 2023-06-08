function sum(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      // если количество полученных аргументов больше либо равно количеству заявленных в fn то вызываем fn
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        // иначе возвращаем функцию
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

let curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3)); // 6

console.log(curry(sum)(1, 2)(3)); // 6
console.log(curry(sum)(1)(2)(3)); // 6
