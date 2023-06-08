function retryPromise(exec, options = {}) {
  let i = 0;

  return replyExec();

  function replyExec() {
    i++;

    return exec().catch((err) => {
      if (!options.retry) throw err;

      const delay = options.retry(i);

      switch (delay) {
        case true:
          return replyExec();
        case false:
          throw err;
        default:
          return new Promise((resolve) => {
            setTimeout(() => resolve(replyExec()), delay);
          });
      }
    });
  }
}

// retryPromise(() => Promise.reject("some error"), {
//   retry: (i) => {
//     console.log(i);
//     if (i < 5) {
//       return i * 1e3;
//     }

//     return false;
//   },
// }).catch(console.error);

const fetch_retry = async (url, options, n) => {
  try {
    return await fetch(url, options);
  } catch (err) {
    if (n === 1) throw err;
    return await fetch_retry(url, options, n - 1);
  }
};

const retryPromiseAsync = async (exec, n = 5) => {
  try {
    return await exec();
  } catch (err) {
    console.log(n);
    if (n === 1) throw err;
    setTimeout(async () => {
      return await retryPromiseAsync(exec, n - 1);
    }, n * 100);
  }
};

retryPromiseAsync(() => Promise.reject("some error")).catch(console.error);

function fetchExec(exec, retries = 5) {
  return new Promise((resolve, reject) => {
    exec().catch((err) => {
      console.log(retries);

      if (retries == 1) return reject(err);

      setTimeout(() => {
        resolve(fetchExec(exec, retries - 1));
      }, retries * 1e3);
    });
  });
}

// fetchExec(() => Promise.reject("some error")).catch(console.error);
