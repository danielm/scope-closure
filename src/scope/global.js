var hello = 'Hello';
var hello = 'Hello +';//Bad practice

let world = 'World';
//let world = 'World +';// Throws error

const helloWorld = 'Hello World!';

//console.log(hello);

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}

anotherFunction();

// ----

const sayGlobal = () => {
  // Because we dont use var, let, const its gets assigned to the Global scrope
  thisIsGlobal = 'I am a bad practice';
}

sayGlobal();
console.log(thisIsGlobal);

// ----

const sayGlobalTwo = () => {
  // Almos same case as before:
  // - goodLocalVar = local var, is good,
  // - badGlobalVar = because of syntaxis reazon, gets puts into the Global scope (bad practice hehe)
  var goodLocalVar = badGlobalVar = 'I also produce a Global var';
}

sayGlobalTwo();
//console.log(goodLocalVar);
console.log(badGlobalVar);

