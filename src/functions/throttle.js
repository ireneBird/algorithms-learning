function throttle(fn, ms) {
  let timer, savedArgs;

  return function wrapper() {
    if (timer) {
      savedArgs = [this, ...arguments];
      return;
    }

    fn.apply(this, arguments);

    timer = setTimeout(() => {
      timer = null;
      if (savedArgs) {
        wrapper.call(...savedArgs);
        savedArgs = null;
      }
    }, ms);
  };
}

let log = "";

function f(a) {
  log += a;

  console.log(log);
}

const f1000 = throttle(f, 1000);
f1000(1);
f1000(2);
f1000(3);

setTimeout(() => f1000(4), 2000);

f1000(5);
f1000(6);
f1000(7);
setTimeout(() => f1000(8), 1000);
