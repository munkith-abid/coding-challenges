function threeSum(nums) {
  
  nums.sort();
  // let i = nums.lastIndexOf(0);
  // const firstPositiveIndex = i === -1 ? nums.findIndex(n => n > 0) : i;
  const firstPositiveIndex = nums.findIndex(n => n > 0);
  let counter = 1
  
  let k;
  let i = 0;
  let prevk;
  let res = [];
  for(; i < firstPositiveIndex; i++){

    for(let j = firstPositiveIndex; j < nums.length; j++){
      if(nums[i] + nums[j] < 0){

        for(k = prevk || nums.length - 1; k <= firstPositiveIndex; k--){

          if(nums[k] === -(nums[i] + nums[j])){
            prevk = k - 1;
            res.push([nums[i], nums[j], numd[k]]);
            break;
          }
        }
      } else {
        k = null;
        for(k = prevk || 0; k < firstPositiveIndex; k++){
          if(nums[k] === -(nums[i] + nums[j])){
            prevk = k + 1;
            res.push([nums[i], nums[j], numd[k]]);
            break;
          }
        }
      }


    }
  }




  // for (let i = 0; nums[i] <= 0; i++) {
  //   let kPos = nums.length - 1
  //   for (let j = i + 1; j < nums.length; j++) {
  //     k  = j + 1;
  //     k = j > firstPositiveIndex ? j + 1 : firstPositiveIndex;
  //     for(; k < nums.length; k++) {
  //       counter++;
  //       if ( nums[j] < 0 && ( nums[k] < 0  ) )
  //         continue;
  //       if ((i !== j && j !== k && i !== k) && (nums[j]) === -(nums[i] + nums[k])) {
  //         kPos = k;
  //         if (res.find(a => a[0] === nums[i] && a[1] === nums[j] && a[2] === nums[k])) {
  //           break;
  //         } else {
  //           res.push([nums[i], nums[j], nums[k]]);
  //           break;
  //         }
          
  //       }
  //     }
    // }
  // }
  console.log(res);
  return res;
}

let nums1 = [1, 1, -2]
let nums2 = [0, 0, 0]

// threeSum(nums);
threeSum(nums1);
threeSum(nums2);