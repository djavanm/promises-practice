const testNum = num => {
  return new Promise((resolve, reject) => {
    if(num > 10 ) {
      resolve(`${num} is greater than 10!`);
    }
    else {
      reject(`${num} is less than 10...`);
    }
  });
};


testNum(12)
  .then(result => console.log(result))
  .catch(error => console.log(error))


const makeAllCaps = words => {
  return new Promise((resolve, reject) => {
    if(Array.isArray(words) && words.every(word => typeof word === 'string')) {
      const upperCase = words.map(word => word.toUpperCase())
      resolve(upperCase)
    } else {
      reject('Sorry, but we need an array of strings, fam.')
    }
  });
};

const sortWords = words => {
  return new Promise((resolve, reject) => {
    if(Array.isArray(words) && words.every(word => typeof word === 'string')) {
      const sortedWords = words.sort((a, b) => {
        if(a < b) {
          return -1;
        }
        if(a > b) {
          return 1;
        }
        return 0;
      });
      resolve(sortedWords);
    } else {
      reject('Super sorry, but we need an array of strings, fam.')
    }
  });
};

makeAllCaps(['wowow', 'pants', 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))

makeAllCaps(['wowow', 5, 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))
