function threeSum(nums) {
  
  nums.sort();
  let i = nums.lastIndexOf(0);
  const firstPositiveIndex = i === -1 ? nums.findIndex(n => n > 0) : i;
  let k;
  
  let res = [];
  for (let i = 0; nums[i] <= 0; i++) {
    let kPos = nums.length - 1
    for (let j = i + 1; j < nums.length; j++) {
      k  = j + 1;
      k = j > firstPositiveIndex ? j + 1 : firstPositiveIndex;
      for(; k < nums.length; k++) {
        counter++;
        if ( nums[j] < 0 && ( nums[k] < 0  ) )
          continue;
        if ((i !== j && j !== k && i !== k) && (nums[j]) === -(nums[i] + nums[k])) {
          kPos = k;
          if (res.find(a => a[0] === nums[i] && a[1] === nums[j] && a[2] === nums[k])) {
            break;
          } else {
            res.push([nums[i], nums[j], nums[k]]);
            break;
          }
          
        }
      }
    }
  }
  return res;
}
