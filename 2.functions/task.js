// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  // Ваш код
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  console.log(sum)

  avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


function makeWork(arrOfArr, func) {
  let max = -Infinity;

  // Ваш кода
  
  // for ...
  for (let i = 0; i < arrOfArr.length; i++) {
    const funcResult = func(arrOfArr[i]);
    if (funcResult > max) {
      max = funcResult;;
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min = Math.abs(arr[0]);
  let max = Math.abs(arr[0]);
  // Ваш код
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i]) > max) {
      max = Math.abs(arr[i]);
    } else if (Math.abs(arr[i]) < min) {
      min = Math.abs(arr[i]);
    }
  }
  return max - min;;
}
