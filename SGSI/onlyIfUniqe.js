function onlyIfUnique(arr){
  const counts = {};
  for(element of arr){
    counts[element] ? counts[element]++ : counts[element] = 1;
  }
  const onlyUniqs = Object.entries(counts).filter(entry => entry[1] == 1);
  return onlyUniqs.length === 1 ? onlyUniqs[0][0] : [];
}
const arr1 = [4, 4, 5, 2, 2, 6, 6, 3, 3, 6];
console.log(onlyIfUnique(arr1));