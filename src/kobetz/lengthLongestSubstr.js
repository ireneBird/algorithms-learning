// возвращает длину наибольшей подстроки с уникальными символами

function lengthLongestSubstr(str) {
  const chars = [...str];

  let max = chars[0] ?? "";

  for (let i = 0; i < chars.length - 1; i++) {
    if (max.length > chars.length - i) break; //максимальная строка больше чем осталось символов в исходной строке

    const set = new Set();

    for (let j = i; j < chars.length; j++) {
      const char = chars[j];

      if (set.has(char)) {
        break;
      }

      set.add(char);
    }

    if (max.length < set.size) {
      max = [...set].join("");
    }
  }

  return max.length;
}

console.log(lengthLongestSubstr("dfddagd")); //3
