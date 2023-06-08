function groupAnagram(arr) {
  const cache = {};

  for (const el of arr) {
    const key = Array.from(el).sort().join();

    if (key in cache) {
      cache[key].push(el);
    } else {
      cache[key] = [el];
    }
  }

  return Object.values(cache);
}

console.log(groupAnagram(["eat", "tea", " tan", "bat", "ate", "nat"]));
// [ [ 'eat', 'tea', 'ate' ], [ ' tan' ], [ 'bat' ], [ 'nat' ] ]
