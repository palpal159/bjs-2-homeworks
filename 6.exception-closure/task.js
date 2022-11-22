function parseCount(string) {
  let rez = Number.parseInt(string)
  if (Number.isNaN(rez) === true) {
    throw new Error('Невалидное значение');
  }
  return rez;
}

function validateCount(string) {
  try {
    return parseCount(string);
  } catch (error) {
    return error;
  } 
}

class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    if (this.sideA + this.sideB < this.sideC || this.sideC + this.sideB < this.sideA || this.sideC + this.sideA < this.sideB) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  getPerimeter() { 
    return this.sideA + this.sideB + this.sideC;
  }
  
  getArea(){ 
    let semiPerimetr = getPerimeter() / 2;
    return +(Math.sqrt(semiPerimetr * (semiPerimetr - this.sideA) * (semiPerimetr - this.sideB) * (semiPerimetr - this.sideC)).toFixed(3));
  }
}

function getTriangle(sideA, sideB, sideC) {
  try {
    const triangle = new Triangle(sideA, sideB, sideC);
    return triangle;
  } catch {
    return {
      getPerimeter: () => "Ошибка! Треугольник не существует",
      getArea: () => "Ошибка! Треугольник не существует",
    };
  } 
}