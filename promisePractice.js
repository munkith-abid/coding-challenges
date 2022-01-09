function f(n){
  let m = 1;
  while(n--){
    m = n / 3.5;
    m = n * 3.5;
    console.log(n);
  }
  return m;
}

const p = new Promise((d, e) => {f(100000); d('done')} )
p.then(res => console.log(res));

// console.log(f(100000))