const takeUntil = function(array, callback) {
  let newArray = [];
  for (let value of array){
    if (value == true){
      newArray.push(value);
    } else {
      return newArray;
    }
    return newArray;
  }
  return 
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


//What am I supposed to do with the callback arguement in the function?  I am just a little confused, can you show an example?