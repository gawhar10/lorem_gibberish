const getChar = (index) => {
  const charList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return charList[index];
};

const getRandomIndex = () => {
  return Math.floor(Math.random() * 26);
};

const getRandomWordLength = () => {
  return Math.floor(Math.random() * 12);
};

const createWord = () => {
  const wordLength = getRandomWordLength();
  let word = "";
  for (let i = 0; i <= wordLength; i++) {
    const index = getRandomIndex();
    word += getChar(index);
  }
  return word;
};

const createLorem = (wordCount) => {
  let lorem = [];
  let paragraph = "";
  const warningMsg = "Word count should be between 50 and 2000.";
  if (wordCount < 50 || wordCount > 2000) {
    lorem.push(warningMsg);
    return lorem;
  }
  for (let i = 1; i < wordCount; i++) {
    const word = createWord();
    if (i % 50 === 0) {
      lorem.push(paragraph);
      paragraph = "";
      paragraph += word + ".";
    } else if (i % 10 === 0) {
      paragraph += word + ", ";
    } else {
      paragraph += word + " ";
    }
  }
  lorem.push(paragraph);
  return lorem;
};

export default createLorem;
