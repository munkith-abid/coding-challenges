
function numsToDigits(str) {
  const strArr = str.split('');
  const numeralsSpecials = [['0', 'z'], ['1', 'o', 'z', 'w', 'u'], ['2', 'w'], ['3', 'h', 'g'], ['4', 'u'],
  ['5', 'f', 'u'], ['6', 'x'], ['7', 's', 'x'], ['8', 'g'], ['9', 'i', 'x', 'g']];
  let res = '';
  findCount = (uniqChar) => strArr.filter(char => char === uniqChar).length;

  function numsToDigits(digit, uniq, ...shared) {
    let totalShared = 0;
    let initialUniqCount = findCount(uniq);
    for (let i = 0; i < shared.length; i++) {
      totalShared += findCount(shared[i])
    }
    let actualUniqCount = initialUniqCount - totalShared;
    return digit.repeat(actualUniqCount);
  }
  for (let i = 0; i < numeralsSpecials.length; i++) {
    res += numsToDigits(...numeralsSpecials[i]);
  }
  // const numCount = (digit, uniq, shared) => {
  //   const count = findCount(uniq) - findCount(shared);
  //   return digit.repeat(count);
  // }


  // const zeros = numsToDigits(...['0', 'z']);
  // const twos = numCount('2', 'w');
  // const threes = numCount('3', 'h', 'g');
  // const fours = numCount('4', 'u');
  // const fives = numCount('5', 'f', 'u');
  // const sixes = numCount('6', 'x');
  // const sevens = numCount('7', 's', 'x');
  // const eights = numCount('8', 'g');
  // const ones = (() => {
  //   const subOs = zeros.length + twos.length + fours.length;
  //   // console.log(subOs);
  //   const totalOs = findCount('o');
  //   // console.log(totalOs);
  //   const onesCount = totalOs - subOs;
  //   return '1'.repeat(onesCount);
  // })()

  // const nines = (() => {
  //   const subOs = sixes.length + eights.length;
  //   // console.log(subOs);
  //   const totalOs = findCount('i');
  //   // console.log(totalOs);
  //   const onesCount = totalOs - subOs;
  //   return '9'.repeat(onesCount);
  // })()



  // // const fives = numCount('f', 'u');
  // // console.log(fives);

  // // const zero = new Num('z');
  // // const five = new Num('f', 'u');
  // // console.log(five);

  // const res1 = zeros + ones + twos + threes + fours + fives + sixes + sevens + eights + nines;
  // console.log(res1)
  return res;
}

const s1 = 'zoofuf';
console.log(numsToDigits(s1));