const findXInThree = (s) => {
  let xCount = 0;
  let i = 2;
  for( ; i < s.length; i = i + 3){
    if(s[i] === 'X' || s[i - 1] === 'X' || s[i - 2] === 'X'){
      xCount++;
    }
  }
  if(s[i] === 'X' || s[i - 1] === 'X' || s[i - 2] === 'X'){
    xCount++;
  }
  return xCount;
}

const s1 = 'XXXXXXXXXXXX..'
console.log(findXInThree(s1))