// принимает функцию и мсек, выполняется сразу, с контрактом по времени след вызова в ms

function throttle(fn, ms) {
  let timer, lastArgs;

  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;

        if (lastArgs) {
          try {
            fn.call(...lastArgs);
          } finally {
            lastArgs = null;
          }
        }
      }, ms);

      return fn.call(this, ...args);
    }

    lastArgs = [this, ...args];
  };
}

function foo() {
  console.log("Kuku");
}

const throttleFoo = throttle(foo, 200);

throttleFoo();
throttleFoo();
throttleFoo();
throttleFoo();
throttleFoo();
