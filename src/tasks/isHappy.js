// link: //leetcode.com/problems/happy-number/editorial/?envType=study-plan-v2&id=top-interview-150

var isHappy = function (n) {
  const set = new Set();

  while (n != 1 && !set.has(n)) {
    set.add(n);
    n = getNext(n);
  }

  return n == 1;

  function getNext(n) {
    let totalSum = 0;

    do {
      let baseShiftedNum = Math.floor(n / 10);
      let diff = n - baseShiftedNum * 10; // последняя цифра
      totalSum += diff * diff; //возведение в степень
      n = baseShiftedNum;
    } while (n > 0);

    return totalSum;
  }
};

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(7));

// const set = new Set();
// if (n == 1) return true;

// return check(n);

// function check(n) {
//   const arr = Array.from(n.toString());

//   let ans = 0;

//   for (let num of arr) {
//     ans += Math.pow(num, 2);
//   }

//   if (set.has(ans)) {
//     return false;
//   } else {
//     set.add(ans);
//     return ans == 1 ? true : check(ans);
//   }
// }
