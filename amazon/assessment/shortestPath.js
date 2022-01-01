//This is a BFS approach where two or more paths to target "race" each other. Whichever make it first wins!!!
function shortestPath(grid) {
  const visited = {};
  const paths = [];
  const validSteps = [[0, 0, 0]];//x coordinates, y coordinates, distance (steps) from start point.
  const getValidSteps = (x, y, steps) => {
    if(x > 0 && grid[y]?.[x - 1] === 9)
      return ++steps;
    else if(x > 0 && grid[y]?.[x - 1] === 1){
      validSteps.push([x - 1, y, steps + 1]);
    }

    if(x < grid[0].length && grid[y]?.[x + 1] === 9)
      return ++steps;
    else if(x < grid[0].length && grid[y]?.[x + 1] === 1){
      validSteps.push([x + 1, y, steps + 1]);
    }

    if(y > 0 && grid[y - 1]?.[x] === 9)
      return ++steps;
    else if(y > 0 && grid[y - 1]?.[x] === 1){
      validSteps.push([x, y - 1, steps + 1]);
    }

    if(y < grid.length - 1 && grid[y + 1]?.[x] === 9)
      return ++steps;
    else if(y < grid.length - 1 && grid[y + 1]?.[x] === 1){
      validSteps.push([x, y + 1, steps + 1]);
    }
    grid[y][x] = "*";//mark current location as visited to avoid revisits.
    return null;

  }
  steps = (x, y) => {
    for(let i = 0; i < validSteps.length ; i++){
      if(grid[validSteps[i][1]][validSteps[i][0]] === 9){
        return ++validSteps[i][2];
      }
      const m = getValidSteps(...validSteps[i]);
      if(m)
        return m;
    }
    return -1;
  }
  return steps(0, 0)
}
const g1 = [
            [1, 1, 1, 0],
            [1, 0, 1, 0],
            [1, 0, 1, 0],
            [0, 0, 9, 0],
            ]
console.log(shortestPath(g1))