function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  result = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])
  return result;
}

function advancedFilter(arr) {
  let resultArr = [];

  // Ваш код
  resultArr = arr.filter(num => num > 0).filter(num => num % 3 == 0).map(num => num * 10);

  return resultArr; // array
}

//var isEqual = first.length === second.length && first.every((value, index) => value === second[index])