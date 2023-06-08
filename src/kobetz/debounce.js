// отложенный вызов функции. Контролирует время вызововов, каждый выхов через заданное количество мс

function debounce(fn, ms, immediate) {
  let timer, cancel;

  return function (...args) {
    if (timer === null && immediate) {
      timer = setTimeout(() => {
        timer = null;
      }, ms);

      return new Promise((resolve) => resolve(fn.call(this, ...args))); //если тут произойдет ошибка, она зареджектится автоматически (из-за ситанксиса вызова)
    }
    if (timer != null) {
      clearTimeout(timer);
      cancel?.(new Error("Canceled"));
    }

    return new Promise((resolve, reject) => {
      cancel = reject;

      timer = setTimeout(() => {
        timer = null;

        try {
          resolve(fn.call(this, ...args));
        } catch (err) {
          reject(err);
        }
      }, ms);
    });
  };
}

const foo = () => {
  return "boom!";
};

const debounceFoo = debounce(foo, 200);

debounceFoo().then(console.log, true);
debounceFoo().then(console.log);
debounceFoo().then(console.log);
debounceFoo().then(console.log);
debounceFoo().then(console.log);

process.addListener("unhandledRejection", console.log);

function debounceSimple(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
