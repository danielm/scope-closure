const fruits = () => {
  if (true){
    var fruits1 = 'apple';// var assign of the local scope withing a funcion scope
    let fruits2 = 'bananna';// cons and let only withi the block
    const fruits3 = 'kiwi';// cons and let only withi the block
  }

  console.log(fruits1);
  //console.log(fruits2);
  //console.log(fruits3);
};

fruits();

//--

let x = 1; //var
{
  let x = 2;// if both are var, it will assing 'both' to two... well, not 'both' its actual the same

  console.log(x);
}

console.log(x);

//-- 

const anotherFunction = () => {
  // This loop will fail because the i values is withing the function scope, considering the delay alway 10
  // So, whats the problem here....... just switching to let i = 0; fixes it.
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }

  //
  // Also, its funny that   console.log(i); prints 10, instead of what our brains may think
  // https://stackoverflow.com/a/750506/10921476
  // https://www.reddit.com/r/javascript/comments/a50jte/is_it_best_to_use_var_or_let_in_for_loop/
  //
}

anotherFunction();