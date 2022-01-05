function binarySearch(arr, char){
  arr.sort();
  const span = arr.length - 1;
  const halfSpan = Math.floor(span / 2);
  if(!halfSpan){
    return -1;
  }
  if(char == arr[halfSpan]){
    return halfSpan;
  } else if(char < arr[halfSpan]) {
    const firstHalf = arr.slice(0, halfSpan);
    return binarySearch(firstHalf, char);
  } else {
    const lastHalf = arr.slice(halfSpan);
    return binarySearch(lastHalf, char);
  }
  return halfSpan;
}

function binaryIncludes(arr, val, lowerBound, upperBound){
  // console.log(upperBound);
  if(lowerBound > upperBound){
    return -1;
  }
  const span = upperBound + lowerBound;
  const midIndex = Math.floor(span / 2);
  const midValue = arr[midIndex];
  // console.log(midIndex);
  if(midValue === val){
    return midIndex;
  } else if(midIndex === 0){
    return -1;
  } else if(val > midValue){
    return binaryIncludes(arr, val, midIndex + 1, upperBound);
  } else if(val < midValue){
    return binaryIncludes(arr, val, lowerBound, midIndex - 1);
  }
  // return midIndex;
}

// const arr = [];


const arr = [2, 3, 7,66, 88, 7,5];
arr.sort((a, b) => a - b)
console.log(arr);
console.log(binaryIncludes(arr, 7, 2, arr.length - 1));