var wordBreak = function(s, wordDict) {
  let res = s;
  let found = false;
  let m = 0;
  wordDict = wordDict.filter( (w) => {
      reg = new RegExp(`${w}`)
      return s.search(reg) !== -1
  })
  console.log(wordDict)
  while(res !== '' && m < wordDict.length){
      let tw = wordDict[m];                                                   
      
//             m++;
//             i = 0
  //         if(!found) return false;        
      }
      res = s;
      m++;
  }
  return found;
  
};