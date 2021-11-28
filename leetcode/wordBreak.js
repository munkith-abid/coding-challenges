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
      for(let i = m; i < wordDict.length; i++){
          let cw = wordDict[i];
          found = false;
//             res = s;
          for(j = 0; j < wordDict.length; j++){
              let fw = wordDict[j];
  //             if(found) break;
              for(let k = 0; k < wordDict.length; k++){
                  let sw = wordDict[k];
  //                 let pattern = new RegExp(`(?<=${cw}|${fw}|${sw}|^)${cw}(?=${cw}|${fw}|${sw}|$)`)
                  
                  }
              
              }
//                 if(found) break;
          }
//             m++;
//             i = 0
  //         if(!found) return false;        
      }
      res = s;
      m++;
  }
  return found;
  
};