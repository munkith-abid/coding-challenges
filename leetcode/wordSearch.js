function getAdjacents(arr, {row, col, preRow, preCol}, prev) {

  const above = {char: arr[ row - 1 ]?.[col], row: row - 1, col, preRow: row, preCol: col };
  const below = {char: arr[ row + 1 ]?.[col], row: row + 1, col, preRow: row, preCol: col};
  const before = {char: arr[row]?.[col - 1], row, col: col - 1, preRow: row, preCol: col};
  const after = {char: arr[row]?.[col + 1], row, col: col + 1, preRow: row, preCol: col};
  // const above = arr[row - 1]?.[col];
  // const below = arr[row + 1]?.[col];
  // const before = arr[row]?.[col - 1];
  // const after = arr[row]?.[col + 1];

}