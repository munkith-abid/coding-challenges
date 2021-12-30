const findClosest = (arr, startIndex, num) => {
  let rightSearch = leftSearch = startIndex;
  let rightSteps = leftSteps = 0;
  while(true){
    if(rightSearch === arr.length ){
      rightSearch = 0;
    }
    if(leftSearch === -1){
      leftSearch = arr.length - 1;
    }
    if(arr[rightSearch] === num){
      return rightSteps;
    }
    if(arr[leftSearch] === num){
      return leftSteps;
    }
    rightSteps = ++leftSteps;
    rightSearch++;
    leftSearch--;
  }
}

const arr = [ 2, 5, 6, 3, 7, 6, 1, 8, 9];
console.log(findClosest(arr, 3, 3));