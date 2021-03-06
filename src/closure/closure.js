const moneyBox = (coins) => {
  var savedCoins = 0;

  savedCoins += coins;

  console.log(`MoneyBox: \$${savedCoins}`);
}

moneyBox(5);
moneyBox(10);

//---

const moneyBox = () => {
  var savedCoins = 0;

  const countCoins = (coins) => {
    savedCoins += coins;

    return savedCoins;
  }

  return countCoins;
};

let myMoneyBox = moneyBox();
console.log(`Savings: $${myMoneyBox(5)}`);
console.log(`Savings: $${myMoneyBox(10)}`);
