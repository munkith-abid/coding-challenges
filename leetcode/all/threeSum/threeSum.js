function threeSum(nums) {
  
  nums.sort();
  let i = nums.lastIndexOf(0);
  const firstPositiveIndex = i === -1 ? nums.findIndex(n => n > 0) : i;
}