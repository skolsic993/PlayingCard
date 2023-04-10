function getCard1() {
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  const suits = ["clubs", "spades", "hearts", "diamonds"];

  const idx = Math.floor(Math.random() * values.length);
  const suitIdx = Math.floor(Math.random() * suits.length);
  const value = values[idx];
  const suit = suits[suitIdx];

  return {
    suit,
    value,
  };
}

function pickRandomNumber(arr) {
  const idx = Math.floor(Math.random() * arr.length);

  return arr[idx];
}

function getCard2() {
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  const suits = ["clubs", "spades", "hearts", "diamonds"];

  return {
    suit: pickRandomNumber(suits),
    value: pickRandomNumber(values),
  };
}

const result = getCard2();

console.log(result);
