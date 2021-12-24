function foo(codeList, shoppingCart) {
  let codeStr = codeList.join(' \\w*\\s?');
  // const r = /\s/g;
  // // codeStr = codeStr.replace(r, '');
  // console.log(codeList);
  // console.log(codeStr);
  const cartStr = shoppingCart.join(' ');
  console.log("cart: ", cartStr);
  const r1 = /anything/g;
  const pattern = codeStr.replace(r1, '\\b\\w+\\b');
  console.log('pattern: ', pattern);
  const r2 = new RegExp(pattern);
  const winner = cartStr.match(r2);
  console.log('r2: ', r2);
  return winner ? 1 : 0;
}