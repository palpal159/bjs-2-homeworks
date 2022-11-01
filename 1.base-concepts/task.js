"use strict"
function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  arr = [];
  let d =  b**2-4*a*c;
  if (d<0) {
    arr = [];
  } else if (d === 0) {
    arr.push(-b/(2*a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a));
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  // код для задачи №2 писать здесь
  if (!isNaN(percent)) {
    alert ('Параметр Процентная ставка содержит неправильное значение ');
  } else if (!isNaN(contribution)) {
    alert ('Параметр Первый взнос содержит неправильное значение ');
  } else if (!isNaN(amount)) {
    alert ('Параметр Общая стоимость содержит неправильное значение ');
  }
  let interestRate = percent / 100;
  let interestRateMonth = interestRate / 12;
  let loanBody = amount - contribution;
  let today = new Date();
  let creditTerm = +(((date.getTime() - today.getTime()) / (24 * 60 * 60 * 1000)) / 30).toFixed(0);
  console.log(creditTerm);
  let monthlyPayment = loanBody * (interestRateMonth + (interestRateMonth / (((1 + interestRateMonth)**creditTerm)-1))); //S * (P + (P / (((1 + P)^n) - 1)))
  totalAmount = +(monthlyPayment * creditTerm).toFixed(2);
  console.log(totalAmount);
  return totalAmount;
}
