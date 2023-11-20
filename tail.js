const tail = function (arr) {
  let newArray = [];
  newArray = arr.slice(1);
  return newArray;
};

module.exports = tail;