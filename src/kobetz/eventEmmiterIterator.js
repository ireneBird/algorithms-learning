// итаратор возвращает новые элементы (обьекты и события) при срабатывании события

const { EventEmitter } = require("events");

const emitter = new EventEmitter(); //тестируем на eventEmmiter

(async () => {
  for await (const e of on(emitter, "click")) {
    // если заменить emitter на document, то будем отлавливать события DOM
    console.log(e);
  }
})();

// имитация событий
emitter.emit("click", "boom!");
emitter.emit("click", "bam!");

function on(el, event) {
  const buff = [];
  let cb;

  // обработчик события с кастомным коллбеком
  el.addListener(event, (e) => {
    if (cb != null) {
      cb(e);
      cb = null;
    } else {
      // нет коллбека, то есть еще никто не вызвал next() то сохраняем событие в промежуточный буфер
      buff.push(e);
    }
  });

  return {
    [Symbol.asyncIterator]() {
      let promise;

      return {
        // итератор должен быть итерируемым поэтому он ссылается на самого себя
        [Symbol.asyncIterator]() {
          return this;
        },

        next() {
          if (promise != null) {
            return promise;
          }

          if (buff.length !== 0) {
            //в буфере есть элементы
            return Promise.resolve({ value: buff.shift(), done: false });
          }

          promise = new Promise((resolve) => {
            cb = (e) => {
              promise = null;
              resolve({ value: e, done: false });
            };
          });

          return promise;
        },
      };
    },
  };
}
