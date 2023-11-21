const countLetters = function(string) {

  const obj = {};
  let regex = /[a-zA-Z]/;
  // Checks if value is a letter then creates the value so I can then iterate it since it exists because you cannot create an object value and increment it in the same statement
  for (let value of string) {
    if (regex.test(value)) {
      if (obj[value]) {
        obj[value]++;
      } else {
        obj[value] = 1;
      }
    }
  }
  return obj;
};

module.exports = countLetters;