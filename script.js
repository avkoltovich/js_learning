'use strict'

let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?', '0'),
    time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '0');
  }
}

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  saving: false,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется', '');
      if (typeof (a) === 'string' &&
        typeof (a) != null &&
        typeof (b) != null &&
        a != '' &&
        b != '' &&
        a.length < 50) {
        console.log('Done');
        appData.expenses[a] = b;
      } else {
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
      console.log('Высокий уровень достатка');
    } else {
      console.log('Произошла ошибка');
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt('Какова сумма накоплений?', ''),
        percent = +prompt('Под какой процент?', '');

      appData.monthIncome = save / 100 / 12 * percent;
      alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i <= 3; i++) {
      let a = prompt('Статья необязательных расходов?', '');
      optionalExpenses.expenses[i] = a;
    }
  },
  chooseIncome: function () {
    let items;
    do {
      items = prompt('Что принесет дополнительный доход? (Перечислите через запятую', '');
    } while (items === '' || typeof(items) === null || typeof(items) != 'string');

    appData.income = items.split(', ');
    appData.income.push(prompt('Может что-то еще?'));
    appData.income.sort();
    appData.income.forEach(function(item, i) {
      alert("Способы доп. заработка: " + (i + 1) + " - " + item);
    });
  }
};

for (let key in appData) {
  console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

