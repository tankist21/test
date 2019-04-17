var money, time,
    btn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0]
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

var appData = {
    budjet:money,
    timeData:time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
      for (i = 0; i<2; i++) {
        var a = prompt("Введите обязательную статью расходов", ""), 
            b = prompt("Во сколько обойдётся", "");   
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
            && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a]=b;}
                else {                            
                  console.log ("bad result");
                  i--;
                }
          }
    },
    detectDayBudget: function(){
      appData.moneyPerDay = (appData.budjet/30).toFixed();
      alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    
    detectLevel: function() {
      if (appData.moneyPerDay<100) {
        console.log('Минимальный уровень достатка'); 
         } else if (appData.moneyPerDay>100 && appData.moneyPerDay<2000) {
             console.log('Средний уровень достатка');
         } else if (appData.moneyPerDay > 2000) {
             console.log("Высокий уровень");
         } else {
             console.log("Ошибка");}
             console.log(appData);
   
    },
    checkSavings: function(){
      if (appData.savings == true) {
        var save = +prompt("Какова сумма накоплений"),
            percent = + prompt("Под какой процент?");
  
        appData.monthIncome = (save/100/12*percent).toFixed(2);
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
      }
    },

    chooseOptExpenses: function(){
      for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
      }
    },

    chooseIncome: function(){
      var items = prompt("Что принесёт дополнительный доход?(Перечислите через запятую", "");
      if (typeof(items) != "string" || items == "" || typeof(items) == null) {
      console.log("Неправильный ввод");}

    
      appData.income = items.split(", ");
      appData.income.push(prompt("Может что - то ещё добавить?"));
      appData.income.sort();
      appData.income.forEach(function(items, i){
        console.log("Способы доп. заработка: " + (i + 1) + ". " + items);
    }); 
      }

};
for(var key in appData) {
  console.log("Наша программа включает в себя данные: " + key + ":" + appData[key]);
}
