const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate(source) {
  const rotated = source.map((_) => []);

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      rotated[j][source.length - 1 - i] = source[i][j];
    }
  }
  return rotated;
}

function rotate180(source) {
  return rotate(rotate(source));
}

function rotate270(source) {
  return rotate180(rotate(source));
}

function print(arr) {
  arr.forEach((element) => {
    console.log(element);
  });
}

print(rotate(matrix));
print(rotate180(matrix));
print(rotate270(matrix));
