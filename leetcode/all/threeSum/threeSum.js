function threeSum(nums) {
  
  nums.sort();
  let i = nums.lastIndexOf(0);
  // const firstPositiveIndex = i === -1 ? nums.findIndex(n => n > 0) : i;
  const firstPositiveIndex = nums.findIndex(n => n > 0);
  function binFindIndex(arr, elem, l = 0, r = arr.length){
    let leftBound = l;
    let rightBound = r;
    while(rightBound >= leftBound){
      let mid = parseInt((rightBound - leftBound) / 2) + leftBound;
      if(arr[mid] === elem) return mid;
      if(arr[mid] < elem){
        leftBound = mid + 1;
      } else {
        rightBound = mid - 1;
      }
      
    }
    return -1;

  }
  const res = [];
  const hasZero = nums[firstPositiveIndex - 1] === 0;
  console.log(nums);
  for(let i = 0; i < firstPositiveIndex; i++){
    for(let j = nums.length; j >= firstPositiveIndex; j--){
      let neg = nums[i];
      let pos = nums[j];
      let sum = neg + pos;

      // console.log(sum);
      // console.log(neg + pos + -sum);
      if(sum === 0 && hasZero){
        res.push([neg, pos, sum]);
      }else {
        
        if(binFindIndex(nums, -sum) !== -1){
          res.push([neg, pos, -sum])
        }
      }
    }
  }
  // console.log(binFindIndex([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))
  return res
}

let nums1 = [1, 1, -2]
let nums2 = [0, 0, 0]
const nums3 = [-1,0,1,2,-1,-4]

// threeSum(nums);
console.log(threeSum(nums1));
console.log(threeSum(nums3));
// threeSum(nums2);