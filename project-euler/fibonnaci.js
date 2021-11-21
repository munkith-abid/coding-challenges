function evenFibSum(n){
  function fibonacci(n, memo = {}){
    if(memo[n])
        return memo[n];
    if(n <= 1)
        return 1;
    let fibTerm = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
//         console.log(fibTerm);
    if(fibTerm % 2 === 0)
        sum += fibTerm; 
}
}

console.log(evenFibSum(32))