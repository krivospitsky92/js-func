// Не забывайте проверки на НаН, и возвращайте null если найден НаН

// 1. Создать функцию которая вернет максимальное число из двух
// maxNum(3, 7) // 7
// maxNum(5, 1) // 5


// 2. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие:
// isAdult(20); // true
// isAdult(4); // false

// 3. Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность нацело первого вторым:
// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

// 4. Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет

// ------------------ 1 ----------------------
function maxNum(num1, num2) {
  if(isNaN(num1) || isNaN(num2)) {
    console.log(null);
    return null;
  }
  if (num1 > num2) {
    console.log(num1);
  } 
  if (num1 < num2) {
    console.log( num2);
  }
}

maxNum();

// ------------------- 2 ----------------------


const age = Number(prompt('Укажите ваш возраст'));

function isAdult () {
  if (isNaN(age)) {
    console.log(null)
    return null;
  }
  if (age >= 18) {
    console.log (true);
  } 

  if (age < 18) {
    console.log (false);
  }
}

isAdult();

// ---------------------- 3 ----------------------------------


function checkMultiplicity (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.log(null);
    return (null);
  }
  if(num1 % num2 == '0') {
    console.log(true);
  } 
  if (num1 % num2 != '0') {
    console.log(false);
  }
}

checkMultiplicity();

// ----------------------------- 4 -------------------------------------

let triangle_a = prompt('Укажите сторону треугольника', 'см.');
let triangle_h = prompt('Укажите высоту треугольника', 'см.');


function checkTriangle() {
  if (typeof triangle_a === 'string' && typeof triangle_h === 'string') {
    console.log(true);
  } 
  if (typeof triangle_a === undefined && typeof triangle_h === undefined || typeof triangle_a == NaN && typeof triangle_h == NaN) {
    console.log(false);
  }
}

checkTriangle();



