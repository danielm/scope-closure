const person = () => {
  var saveName = "";

  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    },
  };
};

let somePerson = person();
somePerson.setName('Daniel');

console.log(somePerson.getName());