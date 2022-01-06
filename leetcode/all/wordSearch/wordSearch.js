const wordSearch = (arr, s) => {
  const charLocations = {};
  for(let row = 0; row < arr.length; row++){
    for(let col = 0; col < arr[0].length; col++){
      const char = arr[row][col];
      charLocations[char] ? charLocations[char].push([[row, col], [-1, -1], 1]) : (charLocations[char] =  [[[row, col], [-1, -1], 1]]);
    }
  }
  console.log(charLocations);

  function areNeighbors(loc1, loc2){
    const rowDiff = loc1[0] - loc2[0];
    const colDiff = loc1[1] - loc2[1];
    return Math.abs(rowDiff - colDiff) === 1;
  }

  const stack = (charLocations[s[0]] && [...charLocations[s[0]]]) || [];
  console.log(stack);

  sameOrigin = (curr, origin) => {
    return curr[0] === origin[0] && curr[1] === origin[1];
  }
  
  // console.log(areNeighbors(charLocations['A'].locations[0], charLocations['B'].locations[0]));

  function getNeibs(curr, origin, nextIndex){
    const targetChar = s[nextIndex];
    const pontentialNeibs = charLocations[targetChar];
    // console.log(pontentialNeibs);
    const legitNeibs = [];
    if(pontentialNeibs)
    for(let neib of pontentialNeibs){
      neib = [...neib];
      if(areNeighbors(curr, neib[0]) && !sameOrigin(origin, neib[0])){
        neib[1] = curr; //update next char origin.
        neib[2] = nextIndex + 1;         //update next char nextIndex.
        legitNeibs.push(neib);
      }
    }
    return legitNeibs;
  }
  let run = 0;
  function f(){
    while(stack.length > 0){
      let current = stack.pop();
      // if(!charLocations[s[current[2]]]) return false;
      if(current[2] >= s.length) return true;
      let neibs = getNeibs(...current);
      stack.push(...neibs);
      console.log("run#: ", ++run, stack);
      console.log(neibs);
    }
    return false;
  }

  return f();



}

const arr1 = [["A","B","C","E"],
              ["S","F","C","S"],
              ["A","D","E","E"]];
const word1 = "ABCCED"

const arr2 = [["a"]];
const word2 = "ab";

const arr3 = [["C","A","A"],
              ["A","A","A"],
              ["B","C","D"]];
const word3 = "AAB"
console.log(wordSearch(arr3, word3));