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

var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
 'GNF576746573fhdg4737dh4;Greenfield',
 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
 'SYB4f65hf75f736463;Stalybridge',
 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for(var i = 0; i < stations.length; i++) {
 var input = stations[i];
 var code = input.slice(0,3);
 var semiC = input.indexOf(';');
 var name = input.slice(semiC + 1);
 var result = code + ': ' + name;
 console.log(result);
}

var getWord = function (start, string) {
  var end = string.indexOf('   ');
  return string.slice(start, end);
};

// Модуль 4 задача 3
'use strict';

var NUMBER_OF_ADS = 8;
var TYPES = ['palace', 'flat', 'house', 'bungalo'];
var PRICES = [10000, 5000, 1000, 0];
var GUESTS = [1, 2, 3];
var ROOMS = [1, 2, 3, 100];
var ROOM_WORDS = ['комнат', 'комната', 'комнаты'];
var GUEST_WORDS = ['гостя', 'гостей'];
var CHECKIN_TIME = ['12:00', '13:00', '14:00'];
var CHECKOUT_TIME = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var LOCATION_MIN_Y = 130;
var LOCATION_MAX_Y = 630;
var LOCATION_MIN_X = 25;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var MAIN_MOUSE_BUTTON = 0;
var MAIN_MAP_PIN_WIDTH = 65;
var MAIN_MAP_PIN_HEIGHT = 87;
var FORM_ENABLED = false;
var FORM_DISABLED = true;
var map = document.querySelector('.map');
var filtersContainer = map.querySelector('.map__filters-container');
var mapPinsWrapper = map.querySelector('.map__pins');
var mainMapPin = map.querySelector('.map__pin--main');
var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
var cardTemplate = document.querySelector('#card').content.querySelector('.map__card');
var locationMaxX = map.offsetWidth - 25;
var adForm = document.querySelector('.ad-form');
var adFieldsets = adForm.querySelectorAll('fieldset');
var mapFilterForm = document.querySelector('.map__filters');
var mapFilterSelectList = mapFilterForm.querySelectorAll('.map__filter');
var mapFilterFieldset = mapFilterForm.querySelector('.map__features');
var adAddress = adForm.querySelector('#address');
var adPrice = adForm.querySelector('#price');
var adType = adForm.querySelector('#type');
var adCheckin = adForm.querySelector('#timein');
var adCheckout = adForm.querySelector('#timeout');
var adRoomNumber = adForm.querySelector('#room_number');
var adGuestNumber = adForm.querySelector('#capacity');

var getRandomInteger = function (min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

var getRandomArrayItem = function (array) {
  return array[getRandomInteger(0, array.length - 1)];
};

var getMixedArray = function (array) {
  var mixedArray = array.slice();
  var j;
  var swap;

  for (var i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    swap = mixedArray[i];
    mixedArray[i] = mixedArray[j];
    mixedArray[j] = swap;
  }

  return mixedArray;
};

var getClippedArray = function (array) {
  return array.slice(0, getRandomInteger(1, array.length));
};

var generateRandomAd = function (index) {
  var ad = {
    author: {},
    offer: {},
    location: {}
  };

  ad.author.avatar = 'img/avatars/user0' + (index + 1) + '.png';

  ad.location.x = getRandomInteger(LOCATION_MIN_X, locationMaxX);
  ad.location.y = getRandomInteger(LOCATION_MIN_Y, LOCATION_MAX_Y);

  ad.offer.title = 'Здесь будет заголовок предложения';
  ad.offer.address = ad.location.x + ', ' + ad.location.y;
  ad.offer.price = getRandomArrayItem(PRICES);
  ad.offer.type = getRandomArrayItem(TYPES);
  ad.offer.rooms = getRandomArrayItem(ROOMS);
  ad.offer.guests = getRandomArrayItem(GUESTS);
  ad.offer.checkin = getRandomArrayItem(CHECKIN_TIME);
  ad.offer.checkout = getRandomArrayItem(CHECKOUT_TIME);
  ad.offer.features = getClippedArray(FEATURES);
  ad.offer.description = 'Здесь будет описание';
  ad.offer.photos = getClippedArray(getMixedArray(PHOTOS));

  return ad;
};

var createAds = function (number) {
  var ads = [];

  for (var i = 0; i < number; i++) {
    ads[i] = generateRandomAd(i);
  }

  return ads;
};

var renderAdPin = function (ad) {
  var pin = pinTemplate.cloneNode(true);

  pin.style.left = (ad.location.x - 25) + 'px';
  pin.style.top = (ad.location.y - 70) + 'px';
  pin.querySelector('img').setAttribute('src', ad.author.avatar);
  pin.querySelector('img').setAttribute('alt', ad.offer.title);

  return pin;
};

var getCorrectWord = function (number, words) {
  if (words.length === 2) {
    return (number % 10 === 1 && number % 100 !== 11) ? words[0] : words[1];
  }
  if ((number >= 5 && number <= 19) || (number % 10 >= 5 && number % 10 <= 9) || number % 10 === 0) {
    return words[0];
  }
  return (number % 10 === 1) ? words[1] : words[2];
};

var createCard = function (ad) {
  var card = cardTemplate.cloneNode(true);
  var popupFeatures = card.querySelector('.popup__features');
  var popupFeature = card.querySelectorAll('.popup__feature');
  var popupPhotos = card.querySelector('.popup__photos');
  var popupPhoto = popupPhotos.querySelector('.popup__photo');

  card.querySelector('.popup__title').textContent = ad.offer.title;
  card.querySelector('.popup__text--address').textContent = ad.offer.address;
  card.querySelector('.popup__text--price').textContent = ad.offer.price + '₽/ночь';

  var roomType = '';

  switch (ad.offer.type) {
    case 'flat':
      roomType = 'Квартира';
      break;
    case 'bungalo':
      roomType = 'Бунгало';
      break;
    case 'house':
      roomType = 'Дом';
      break;
    case 'palace':
      roomType = 'Дворец';
      break;
  }

  card.querySelector('.popup__type').textContent = roomType;

  card.querySelector('.popup__text--capacity').textContent = ad.offer.rooms + ' ' +
    getCorrectWord(ad.offer.rooms, ROOM_WORDS) + ' для ' + ad.offer.guests + ' ' +
    getCorrectWord(ad.offer.guests, GUEST_WORDS);
  card.querySelector('.popup__text--time').textContent = 'Заезд после ' + ad.offer.checkin + ', выезд до ' + ad.offer.checkout;

  for (var i = popupFeature.length - 1; i >= ad.offer.features.length; i--) {
    popupFeatures.removeChild(popupFeature[i]);
  }

  card.querySelector('.popup__description').textContent = ad.offer.description;
  popupPhoto.setAttribute('src', ad.offer.photos[0]);

  if (ad.offer.photos.length > 1) {
    for (i = 1; i < ad.offer.photos.length; i++) {
      var newPopupPhoto = popupPhoto.cloneNode(false);
      popupPhotos.appendChild(newPopupPhoto);
      newPopupPhoto.setAttribute('src', ad.offer.photos[i]);
    }
  }

  card.querySelector('.popup__avatar').setAttribute('src', ad.author.avatar);

  return card;
};

var createAdsBlock = function (ads) {
  var pinsBlock = document.createDocumentFragment();
  var cardsBlock = document.createDocumentFragment();
  var currentPin;
  var currentCard;

  for (var i = 0; i < ads.length; i++) {
    currentPin = renderAdPin(ads[i]);
    currentCard = createCard(ads[i]);
    currentCard.hidden = true;
    pinsBlock.appendChild(currentPin);
    cardsBlock.appendChild(currentCard);
  }

  mapPinsWrapper.appendChild(pinsBlock);
  map.insertBefore(cardsBlock, filtersContainer);
};

var toggleDisabledFormItems = function (list, isDisabled) {
  for (var i = 0; i < list.length; i++) {
    list[i].disabled = isDisabled;
  }
};

var addPinsHandlers = function () {
  var mapPins = mapPinsWrapper.querySelectorAll('.map__pins [type="button"]');
  var mapCards = map.querySelectorAll('.map__card');
  var closeButton;
  var currentOpenCard;

  var openAdCard = function (card) {
    closeButton = card.querySelector('.popup__close');
    if (currentOpenCard) {
      currentOpenCard.hidden = true;
    }
    currentOpenCard = card;
    card.hidden = false;
    closeButton.addEventListener('click', onCloseButtonClick);
    document.addEventListener('keydown', onCardEscKeydown);
  };

  var closeAdCard = function () {
    currentOpenCard.hidden = true;
    closeButton.removeEventListener('click', onCloseButtonClick);
    document.removeEventListener('keydown', onCardEscKeydown);
  };

  var onPinClick = function (pin, card) {
    pin.addEventListener('click', function () {
      openAdCard(card);
    });
  };

  var onPinEnterKeydown = function (pin, card) {
    pin.addEventListener('keydown', function (evt) {
      if (evt.key === ENTER_KEY) {
        openAdCard(card);
      }
    });
  };

  var onCloseButtonClick = function () {
    closeAdCard();
  };

  var onCardEscKeydown = function (evt) {
    if (evt.key === ESC_KEY) {
      closeAdCard();
    }
  };

  for (var i = 0; i < mapPins.length; i++) {
    onPinClick(mapPins[i], mapCards[i]);
    onPinEnterKeydown(mapPins[i], mapCards[i]);
  }
};

var disableAllForms = function () {
  toggleDisabledFormItems(adFieldsets, FORM_DISABLED);
  toggleDisabledFormItems(mapFilterSelectList, FORM_DISABLED);
  toggleDisabledFormItems(mapFilterFieldset, FORM_DISABLED);
};

var enableAllForms = function () {
  toggleDisabledFormItems(adFieldsets, FORM_ENABLED);
  toggleDisabledFormItems(mapFilterSelectList, FORM_ENABLED);
  toggleDisabledFormItems(mapFilterFieldset, FORM_ENABLED);
};

var onMainMapMousedown = function () {
  enableAllForms();
  fillCurrentAddress();
  adGuestNumber.value = '1';
  map.classList.remove('map--faded');
  adForm.classList.remove('ad-form--disabled');

  var randomAds = createAds(NUMBER_OF_ADS);
  createAdsBlock(randomAds);
  addPinsHandlers();
};

var onMainButtonMousedown = function (evt) {
  if (evt.button === MAIN_MOUSE_BUTTON) {
    onMainMapMousedown();
    mainMapPin.removeEventListener('mousedown', onMainButtonMousedown);
    mainMapPin.removeEventListener('keydown', onEnterKeydown);
  }
};

var onEnterKeydown = function (evt) {
  if (evt.key === ENTER_KEY) {
    onMainMapMousedown();
    mainMapPin.removeEventListener('keydown', onEnterKeydown);
    mainMapPin.removeEventListener('mousedown', onMainButtonMousedown);
  }
};

var fillInactiveAddress = function () {
  adAddress.value = (mainMapPin.offsetLeft + Math.floor(MAIN_MAP_PIN_WIDTH / 2)) + ', ' + (mainMapPin.offsetTop + Math.floor(MAIN_MAP_PIN_HEIGHT / 2));
};

var fillCurrentAddress = function () {
  adAddress.value = (mainMapPin.offsetLeft + Math.floor(MAIN_MAP_PIN_WIDTH / 2)) + ', ' + (mainMapPin.offsetTop + MAIN_MAP_PIN_HEIGHT);
};

var onTypeChange = function () {
  switch (adType.value) {
    case 'flat':
      adPrice.min = 1000;
      adPrice.placeholder = 1000;
      break;
    case 'bungalo':
      adPrice.min = 0;
      adPrice.placeholder = 0;
      break;
    case 'house':
      adPrice.min = 5000;
      adPrice.placeholder = 5000;
      break;
    case 'palace':
      adPrice.min = 10000;
      adPrice.placeholder = 10000;
      break;
  }
};

var checkinAndCheckoutSync = function (select, selectToSync) {
  selectToSync.value = select.value;
};

var onRoomOrGuestChange = function () {
  adGuestNumber.setCustomValidity('');
  switch (adRoomNumber.value) {
    case '1':
      if (adGuestNumber.value !== '1') {
        adGuestNumber.setCustomValidity('«для 1 гостя»');
      }
      break;
    case '2':
      if (adGuestNumber.value === '0' ||
        adGuestNumber.value === '3') {
        adGuestNumber.setCustomValidity('«для 2 гостей» или «для 1 гостя»');
      }
      break;
    case '3':
      if (adGuestNumber.value === '0') {
        adGuestNumber.setCustomValidity('«для 3 гостей», «для 2 гостей» или «для 1 гостя»');
      }
      break;
    case '100':
      if (adGuestNumber.value !== '0') {
        adGuestNumber.setCustomValidity('«не для гостей»');
      }
      break;
  }
};

var onCheckinChange = function () {
  checkinAndCheckoutSync(adCheckin, adCheckout);
};

var onCheckoutChange = function () {
  checkinAndCheckoutSync(adCheckout, adCheckin);
};

disableAllForms();
fillInactiveAddress();

adRoomNumber.addEventListener('change', onRoomOrGuestChange);
adGuestNumber.addEventListener('change', onRoomOrGuestChange);
adCheckin.addEventListener('change', onCheckinChange);
adCheckout.addEventListener('change', onCheckoutChange);
adType.addEventListener('change', onTypeChange);
mainMapPin.addEventListener('mousedown', onMainButtonMousedown);
mainMapPin.addEventListener('keydown', onEnterKeydown);
