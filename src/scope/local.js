const helloWorld = () => {
  const hello = 'Hello World';

  console.log(hello);
};

helloWorld();
//console.log(hello);

// ---- 

var scope = 'I am Global';

const functionScope = () => {
  var scope =  'I am Local';

  const func = () => {
    return scope;
  };

  console.log(func());
};

functionScope();// prints local
console.log(scope);// prints global