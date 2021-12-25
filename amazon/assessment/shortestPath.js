function shortestPath(grid) {
  const visited = {};
  const paths = [];
  let moves = 1;
  const validSteps = [[0, 0]];
  const getValidSteps = (x, y) => {
    let found = false;
    if(x > 0 && grid[y]?.[x - 1] === 9)
      return ++moves;
    else if(x > 0 && grid[y]?.[x - 1] === 1){
      validSteps.push([x - 1, y]);
      found = true;
    }

    if(x < grid[0].length && grid[y]?.[x + 1] === 9)
      return ++moves;
    else if(x < grid[0].length && grid[y]?.[x + 1] === 1){
      validSteps.push([x + 1, y]);
      found = true
    }

    if(y > 0 && grid[y - 1]?.[x] === 9)
      return ++moves;
    else if(y > 0 && grid[y - 1]?.[x] === 1){
      validSteps.push([x, y - 1]);
      found = true
    }

    if(y < grid.length - 1 && grid[y + 1]?.[x] === 9)
      return ++moves;
    else if(y < grid.length - 1 && grid[y + 1]?.[x] === 1){
      validSteps.push([x, y + 1]);
      found = true
    }
    if(found) moves++
    grid[y][x] = "*";
    return null;

  }
  steps = (x, y) => {
    const key = x + ',' + y;
    // if(x >= grid[0].length || y >= grid.length){
    //   return -1;
    // }
    // if(x >= 0 && y >= 0){
    // if(key in visited){
    //   return visited[key];
    // }
    for(let i = 0; i < validSteps.length ; i++){
      const m = getValidSteps(...validSteps[i]);
      if(m)
        return m;
    }
    // if (grid[y][x] === 1) {
    //   grid[y][x] = 0;
    //   ++moves;
    //   visited[key] = moves;
    //   while (1) {

        // if(x > 0 && grid[y]?.[x - 1] !== 0) return steps(x - 1, y, moves);
        // if(x < grid[0].length - 1 && grid[y]?.[x + 1] !== 0) return steps(x + 1, y, moves);
        // if(y > 0 && grid[y - 1]?.[x] !== 0) return steps(x, y - 1, moves);
        // if(y < grid.length - 1 && grid[y + 1]?.[x] !== 0) return steps(x, y + 1, moves);
      // }
      // const left = x + 1 < grid[0].length ? x + 1 : x;
      // const right = x - 1 > 0 ? x - 1 : x;
      // const top = y + 1 < grid.length ? y + 1 : y;
      // const bottom = y - 1 > 0 ? y - 1 : y;
      // return Math.min(steps(left, y, moves), steps(right, y, moves), steps(x, top, moves), steps(x, bottom, moves));
    // }
    // if (grid[y][x] === 9) {
    //   paths.push(moves);
    //   return;
    // }
    // }

    return moves;
  }
  console.log(validSteps);
  return steps(0, 0)
}
const g1 = [[1, 1, 1],
            [1, 0, 1],
            [1, 9, 1],]
console.log(shortestPath(g1))