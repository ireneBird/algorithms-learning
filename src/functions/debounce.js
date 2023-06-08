function debounce(func, ms = 300) {
  let timer;

  return function () {
    if (timer) return;

    func.apply(this, arguments);

    timer = setTimeout(() => (timer = null), ms);
  };
}

function saveInput() {
  console.log("Saving data");
}
const processChange = debounce(() => saveInput());

processChange(1);
processChange(2);
processChange(3);
processChange(4);
processChange(5);
