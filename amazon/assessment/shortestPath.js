function shortestPath(grid){
  const visited = {};
  const paths = [];
  steps = (x, y, moves = 0) => {
    const key = x + ',' + y;
    // if(x >= grid[0].length || y >= grid.length){
    //   return -1;
    // }
    // if(x >= 0 && y >= 0){
      if(key in visited){
        return visited[key];
      }
      if(grid[x][y] === 1){
        grid[x][y] = 0;
        ++moves;
        visited[key] = moves;
        if(x > 0) return steps(x - 1, y, moves);
        if(x < grid[0].length - 1) return steps(x + 1, y, moves);
        if(y > 0) return steps(x, y - 1, moves);
        if(x < grid.length - 1) return steps(x, y + 1, moves);
        // const left = x + 1 < grid[0].length ? x + 1 : x;
        // const right = x - 1 > 0 ? x - 1 : x;
        // const top = y + 1 < grid.length ? y + 1 : y;
        // const bottom = y - 1 > 0 ? y - 1 : y;
        // return Math.min(steps(left, y, moves), steps(right, y, moves), steps(x, top, moves), steps(x, bottom, moves));
      }
      if(grid[x][y] === 9){
        paths.push(moves);
      }
    // }

    return paths;
  }

  return steps(0, 0)
}
const g1 = [[1, 0, 0], 
            [1, 0, 0],
            [1, 9, 0],]
console.log(shortestPath(g1))