function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  if (arr1.length != arr2.length) {
    result = false;
  } 
  for(var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false; 
    } else if (arr1.length === arr2.length && arr1[i] === arr2[i]) {
      result = true;
    }
  return result; 
  }
}

function advancedFilter(arr) {
  let resultArr = [];

  // Ваш код
  resultArr = arr.filter(num => num > 0).filter(num => num % 3 == 0).map(num => num * 10);

  return resultArr; // array
}
