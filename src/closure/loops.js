const anotherFunction = () => {
  // let allows us to handle a block scope within each iteration
  for (let i = 0; i < 10; i++)
  {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}