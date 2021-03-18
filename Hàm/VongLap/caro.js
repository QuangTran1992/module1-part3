function genarateMatrix(size, min, max) {
  let matrix = [];
  for (let i = 0; i < size; i++) {
    let arr = [];
    for (let j = 0; j < size; j++) {
      arr[j] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    matrix.push(arr);
  }
  return matrix;
}
