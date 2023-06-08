fetchWithRetry(() => Promise.reject("boom"), {
  retry: (i) => {
    console.log(i);
    if (i < 5) return i * 1e3;

    return false;
  },
});

function fetchWithRetry(exec, options = {}) {
  let i = 0;

  return innerExec();

  function innerExec() {
    return exec().catch((err) => {
      i++;

      if (options.retry == null) {
        throw err;
      }

      const delay = options.retry(i);
      switch (delay) {
        case true:
          return innerExec();
        case false:
          throw err;
        default:
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(innerExec());
            }, delay);
          });
      }
    });
  }
}
