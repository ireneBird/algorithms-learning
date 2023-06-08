// посчитать максимальную глубину бинарного дерева

function maxDepth(root) {
  let maxDepth = 0;

  traverse();
  return maxDepth;

  function traverse(n = 0, depth = 1) {
    const el = root[n];

    if (el == null) {
      return;
    }

    traverse(n * 2 + 1, depth++);
    traverse(n * 2 + 2, depth++);

    if (depth > maxDepth) {
      maxDepth = depth;
    }
  }
}

console.log(maxDepth([(3, 9, 20, null, null, 15, 7)])); //3
