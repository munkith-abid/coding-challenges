const largestComponent = (graph) => {
  const visited = new Set();
  let max = 0;
  for(const node in graph){
    count = explore(graph, node, visited);
    if(count > max) max = count;
  }
  return max;
}

const explore = (graph, current, visited) => {
  if(visited.has(current)) return 0;
  visited.add(current);
  console.log(visited)
  let size = 1;
  for(const n of graph[current]){
    size += explore(graph, n, visited);
  }
  return size;
}

console.log(largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}))