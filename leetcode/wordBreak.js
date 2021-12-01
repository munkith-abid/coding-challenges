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
                    let pattern2 = new RegExp(`(?<=${cw}|${fw}|${sw}|^)${cw}(?=${cw}|${fw}|${sw}|$)`, 'g')
                    
                    found = !!res.match(pattern2);
                    if(res === '') 
                        return true;
                    if(found) {
                        res = res.replaceAll(pattern2, '');
                        if(res === '') 
                            return true;  
                        break;                    
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

const s1 = "applepenapple";  //true
const w1 = ["apple","pen"]

const s2 = "catsandog"; //false
const w2 = ["cats","dog","sand","and","cat"]

const s3 = "ddadddbdddadd"; //true
const w3 = ["dd","ad","da","b"];

const s4 = "bb";  //true
const w4 = ["a","b","bbb","bbbb"];
 
const s5 = "aaaaaaa";  //false
const w5 = ["aaaa","aa"];

const s6 = "paviraagi"; //true
const w6 = ["pavira","pavi","raa","gi","ag","ii"];

const s7 = "bccdbacdbdacddabbaaaadababadad"
const w7 = ["cbc","bcda","adb","ddca","bad","bbb","dad","dac","ba","aa","bd","abab","bb","dbda","cb","caccc","d","dd","aadb","cc","b","bcc","bcd","cd","cbca","bbd","ddd","dabb","ab","acd","a","bbcc","cdcbd","cada","dbca","ac","abacd","cba","cdb","dbac","aada","cdcda","cdc","dbc","dbcb","bdb","ddbdd","cadaa","ddbc","babb"]
