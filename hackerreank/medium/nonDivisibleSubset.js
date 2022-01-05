function isDivBy(a, n, k){
  // if(a.length < 1){
  //     return false;
  // }
  for(let i = 0; i < a.length; i++){
      // for(let j = i + 1; j < a.length; j++){
          if((a[i] + n) % k === 0){
              return true
          // }
      }
  }
  return false;
}

function nonDivisibleSubset(k, s) {
  let perSets = [];
  function f(s = [...k], n, sub = []){
      if(s.length === 0){
          return;
      }
      let n = s.pop();
      if(!isDivBy(sub, n, k)){
          sub.push(n);
      }
      f(s, sub);
      return sub;
  }
  let maxSize = 0;
  while(s.length){
    console.log(s)
    n = s.pop();
    const arr = f(s, n);
    maxSize = arr.length > maxSize ? arr.length : maxSiz;
    // perSets.push(arr)

  }
  return maxSize;

}

const s1 = [1, 7, 2, 4];
console.log(nonDivisibleSubset(3, s1));