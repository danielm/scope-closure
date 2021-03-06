a = 2;
var a;

console.log(a);//2 'var a' moves 'up'

//--

console.log(a);//undefined
var a = 2;

//--

nameOfDog('Spike'); //it works, because function its also a initialization

function nameOfDog(name) {
  console.log(name);
}



