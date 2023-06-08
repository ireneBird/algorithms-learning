// сделать обход обьекта в глубину и ширину

const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      f: { g: 3 },
      e: 4,
    },
  },
  k: 5,
};

function logDepth(obj) {
  for (let key in obj) {
    const val = obj[key];
    if (typeof val == "number") {
      console.log(val);
    } else {
      log(val);
    }
  }
}

// console.log(logDepth(obj));

function log(obj) {
  const queue = [obj];

  while (queue.length) {
    const obj = queue.shift();

    for (let key in obj) {
      const val = obj[key];

      if (typeof val == "number") {
        console.log(val);
      } else {
        queue.push(val);
      }
    }
  }
}

function logStack(obj) {
  const stack = [intoIter(obj)];

  while (stack.length) {
    const iter = stack.pop();

    for (let val of iter) {
      if (typeof val == "number") {
        console.log(val);
      } else {
        stack.push(iter);
        stack.push(intoIter(val));
        break;
      }
    }
  }

  function intoIter(obj) {
    return Object.values(obj).values();
  }
}

console.log(logStack(obj));
