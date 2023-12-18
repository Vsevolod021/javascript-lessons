async function* generator(start, end) {
  for(let i=start; i<end; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    yield i;
  }
}


(async () => {
  let gen = generator(1, 5);

  console.log(await gen.next());
  console.log(await gen.next());
  console.log(await gen.next());
  console.log(await gen.next());
})()