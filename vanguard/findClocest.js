const findClosest = (arr, startIndex, num) => {
  let rightSearch = leftSearch = startIndex;
  while(true){
    if(rightSearch === arr.length ){
      rightSearch = 0;
    }
    if(leftSearch === -1){
      leftSearch = arr.length - 1;
    }
    if(arr[rightSearch] === num){
      return rightSearch;
    }
    if(arr[leftSearch] === num){
      return leftSearch;
    }
    rightSearch++;
    leftSearch--;
  }
}

const arr = [2, 5, 6, 3, 7, 6, 1, 8, 9, 3];
console.log(findClosest(arr, 5, 3));