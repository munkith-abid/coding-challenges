const wordSearch = (arr, s) => {
  const charLocations = {};
  for(let row = 0; row < arr.length; row++){
    for(let col = 0; col < arr[0].length; col++){
      const char = arr[row][col];
      charLocations[char] || (charLocations[char] = {locations: []});
      charLocations[char].locations.push([row, col]);
      
    }
  }
  console.log(charLocations);

  function areNeighbors(loc1, loc2){
    const rowDiff = loc1[0] - loc2[0];
    const colDiff = loc1[1] - loc2[1];
    return Math.abs(rowDiff - colDiff) === 1;
  }
  console.log(areNeighbors(charLocations['A'][1], charLocations['B'][0]));
  function f(){

  }


//   console.log(charLocations);
//   const queue = getLocations(s[0], arr);
//   let charIndex = 0;
//   for(let i = 0; i < queue.length; i++){
//     console.log(queue);
//     if(queue[i][2] === s.length) return true;
//     let neibs = updateNeighbors(queue[i]);
//     // console.log(neibs);
//     for(const n of neibs){
//       // console.log(arr[n[0]]?.[n[1]]);
//       if(arr[n[1]]?.[n[0]] === s[n[2]]){
//         n[2]++;
//         queue.push(n);
//       }
//     }
//     // charIndex++;
    
//   }

//   function updateNeighbors(loc){
//     const x = loc[1];
//     const y = loc[0];
//     const char = loc[2]
//     const top = [y - 1, x, char];
//     const left = [y, x + 1, char];
//     const bottom = [y + 1, x, char];
//     const right = [y, x - 1, char];
//     // if(top || left || bottom || right){
//     //   charIndex++;
//     // }
//     return [top, right, bottom, left];
//   }



//   return false;
// }

// const getLocations = (char, arr) => {
//   const res = [];
//   for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[0].length; j++){
//       if(arr[i][j] === char) res.push([j, i, 1]);
//     }
//   }
//   return res;
}

const arr1 = [["A","B","C","E"],
              ["S","F","C","S"],
              ["A","D","E","E"]];
const word1 = "ABCCED"
console.log(wordSearch(arr1, word1));