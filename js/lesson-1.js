'use strict'

// Определение наибольшего общего делителя. Алгоритм Эвклида
function GCD(a, b) {
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return b;
}

// Ускоренный алгоритм Эвклида
function fastGCD(a, b) {
  let c = 0;
  while (b) {
    c = a % b;
    a = b;
    b = c;
  }
  return a;
}

// Программа определения простоты числа
function isPrime(n) {
  let d = 0;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      d++;
    }
  }
  if (d == 0) return true;
  return false;
}

// Программа определения простоты числа 2
function isPrime2(n) {
  let d = 2;
  while (d * d <= n && n % d !== 0) {
    d++;
  }
  return d * d > n;
}

// Быстрое возведение в степень
function quickPow(a, b) {
  let n = 1;
  while (b) {
    if (b % 2) {
      b--;
      n *= a;
    } else {
      a *= a;
      b /= 2;
    }
  }
  return n;
}

function createArray(start, end) {
  let array = [];
  for (let i = 0; i <= end - start; i++) {
    array[i] = start + i;
  }
  return array;
}

// Индекс массы тела
function BMI(weight, height) {
  return (weight / (height * height / 100)).toFixed(2);
}

// Максимальное число из введенных
function maxNumber(a, b, c, d) {
  if (a > b && a > c && a > d) return a;
  if (b > c && b > d) return b;
  if (c > d) return c;
  else return d;
}

function swap(a, b) {
  console.log('Вы ввели числа: ' + a + ' и ' + b);
  let swap;
  swap = a;
  a = b;
  b = swap;
  console.log('Получили числа: ' + a + ' и ' + b);
}

function swap2(a, b) {
  console.log('Вы ввели числа: ' + a + ' и ' + b);
  a = a + b;
  b = a - b;
  a = a - b;
  console.log('Получили числа: ' + a + ' и ' + b);
}

// Определение времени года по номеру месяца
function month(n) {
  if ((n >= 1 && n < 3) || n == 12) return 'Winter';
  if (n >= 3 && n < 6) return 'Spring';
  if (n >= 6 && n < 9) return 'Summer';
  if (n >= 9 && n < 12) return 'Autumn';
  else return 'А ты точно грамотный?';
}

// Подставляет окончание возраста
function age(n) {
  let div = n % 10;
  if ((n >= 5 && n <= 19) || (div >= 5 && div <= 9) || div == 0) return n + ' лет';
  if (div == 1) return n + ' год';
  else return n + ' года';
}

console.log(age(32));

// Квадраты и кубы диапазона
function sqAndCub(start, end) {
  let arraySq = [];
  let arrayCub = [];
  for (let i = 0; i <= end - start; i++) {
    arraySq[i] = (start + i) ** 2;
    arrayCub[i] = (start + i) ** 3;
  }
  console.log(`Квадраты чисел от ${start} до ${end}: ` + arraySq);
  console.log(`Кубы чисел от ${start} до ${end}: ` + arrayCub);
  return null;
}

// Выводит частное и остаток от деления
function div(n, k) {
  let i = 1;
  while (n) {
    n = n - k;
    if (n < k) {
      console.log(`Остаток от деления: ${n}`);
      return console.log(`Частное: ${i}`)
    }
    i++;
  }
}

// Показывает, есть ли в составе числа нечетные цифры
function isOdd(n) {
  let d;
  while (n) {
    d = n % 10;
    if (d % 2 != 0) return console.log(true);
    n = (n - d) / 10;
  }
  return console.log(false);
}

// Выводит среднее арифметическое всех чисел с 8 на конце
function avrEight(array) {
  let avr = 0;
  let count = 0;
  for (let key of array) {
    if ((key % 10 == 8) || key == 8) {
      avr = avr + key;
      count++;
    }
  }
  if (avr) return console.log(avr / count);
  return console.log(0);
}

// Наибольшее из 3х чисел
function maxThree(a, b, c) {
  if (a > b && a > c) return a;
  if (b > c) return b;
  else return c;
}

//Автоморфные числа
function autoMorph(n) {
  let k;
  let count;
  let j;
  for (let i = 0; i <= n; i++) {
    count = 0;
    k = i ** 2;
    j = i;
    while (j >= 1) {
      count++;
      j /= 10;
    }
    if (k % (10 ** count) == i) console.log(`Число ${i} атоморфно. Его квадрат равен: ${k}`);
  }
}
// Суммирует все числа, которые делятся на 3 или 5
function solution(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum = sum + i;
    }
  }
  return sum;
}

// Задачка на очередь в кинотеатре и возможность выдать сдачу кассиром
function tickets(peopleInLine) {
  let twentyFive = 0;
  let fifty = 0;

  for (let key of peopleInLine) {
    if (key == 25) {
      twentyFive++;
    }

    if (key == 50) {
      if (twentyFive > 0) {
        twentyFive--;
        fifty++;
      } else return "NO";
    }

    if (key == 100) {
      if (fifty > 0 && twentyFive > 0) {
        twentyFive--;
        fifty--;
      } else if (fifty == 0 && twentyFive >= 3) {
        twentyFive -= 3;
      } else return "NO";
    }
  }
  return "YES";
}

console.log(tickets([25, 25, 50, 50]));

// Вывод сотен, десятков и единиц

function toObject(number) {
  if (number > 999) return console.log('Число больше 999');
  let str = number.toString();
  let obj = {};

  obj['единицы'] = str[str.length - 1];
  if (str[str.length - 2]) obj['десятки'] = str[str.length - 2];
  if (str[str.length - 3]) obj['сотни'] = str[str.length - 3];

  return obj;
}

function toObjectMath(number) {
  if (number > 999) return console.log('Число больше 999');
  let obj = {};
  obj['единицы'] = number % 10;
  number = (number - obj['единицы']) / 10;
  obj['десятки'] = (number) % 10;
  number = (number - obj['десятки']) / 10;
  obj['сотни'] = (number) % 10;

  return obj;
}

console.log(toObjectMath(123));

// Генератор случайных чисел

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

// Перемешивает массив в случайном порядке
function shakeArrayMy(array) {
  var newArray = [];
  var logArray = [];
  var swap;
  for (var i = 0; i < array.length; i++) {
    do {
      swap = getRandomInteger(0, array.length - 1);
    } while (logArray.indexOf(swap) != -1);
    logArray.push(swap);
    newArray.push(array[swap]);
  }

  return newArray;
}

// Вариант Alexander str (ипользует метод map как цикл)
var shakeArray = function (array) {
  var newArray = [];
  var logArray = [];
  array.map(function () {
    do {
      var swap = getRandomInteger(0, array.length - 1);
    } while (logArray.indexOf(swap) != -1);
    logArray.push(swap);
    newArray.push(array[swap]);
  })

  return newArray;
}

// Рандомной длины массив на основе имеющегося
function cropArray(array) {
  let newArray = [];
  for (let i = 0; i < getRandomInteger(0, array.length - 1); i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(shakeArray(['a', 'b', 1, 55, 146, 32, 32, [1, 2, 4], true]));

// Перемешиваем массив при помощи метода map
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

var shuffleMap = function (array) {
  var logArray = [];
  return array.map(function (key) {
    do {
      var swap = getRandomInteger(0, array.length - 1);
    } while (logArray.indexOf(swap) != -1);
    logArray.push(swap);
    key = array[swap];
    return key;
  });
};

console.log(shuffleMap(['a', 'b', 1, 55, 146, 32, 32, [1, 2, 4], true]));

// Замыкания
function firstLevel(n) {
  return function secondLevel(num) {
    return function thirdLevel(number) {
      return n + num + number;
    }
  }
}

const first = firstLevel(1);
const second = first(2);
const third = second(3);

console.log(third);

// Получает на вход число и складывает цифры этого числа

var sumDigits = function (number) {
  var modifiedNumber = number;
  var sum = 0;
  var currentNumber;
  while (modifiedNumber) {
    currentNumber = modifiedNumber % 10;
    sum += currentNumber;
    modifiedNumber = (modifiedNumber - currentNumber) / 10;
  }
  return sum;
};

var addDigits = function (number) {
  var totalSum = number;
  while (totalSum >= 10) {
    totalSum = sumDigits(totalSum);
  }
  return totalSum;
};

console.log(addDigits(3851));

// Реализуйте и экспортируйте по умолчанию функцию,
// которая принимает на вход два аргумента - количество нулей и количество единиц,
// и определяет сколько есть способов размещения этих нулей и единиц так,
// что бы не было двух нулей идущих подряд

var getFactorialNumber = function (n) {
  var product = 1;
  for (var i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
};

var getTotalCombinations = function (zeros, ones) {
  return getFactorialNumber(zeros + ones) / (getFactorialNumber(zeros) * getFactorialNumber(ones));
};

var withoutTwoZeros = function (zeros, ones) {
  var total = getTotalCombinations(zeros, ones);
  var withZeros = 0;
  if (zeros < 2) {
    return total;
  }
  if (zeros - ones > 1) {
    return 0;
  }
  for (var i = 1; i < zeros; i++) {
    withZeros += getTotalCombinations(i, ones);
  }
  total -= withZeros;
  return total;
};

console.log(withoutTwoZeros(2, 4));
