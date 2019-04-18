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

    expensesItemBtn.disabled =true;
    optionalexpensesBtn.disabled = true;
    countBudgetBtn.disabled = true;

    btn.addEventListener('click', function() {
      time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
      money = +prompt("Ваш бюджет на месяц?", "");      

      while(isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюджет на месяц?", "");
      }
      appData.budjet = money;
      appData.timeData = time;
      budgetValue.textContent = money.toFixed();
      yearValue.value = new Date(Date.parse(time)).getFullYear();
      monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
      dayValue.value = new Date(Date.parse(time)).getDay();
    });

    expensesItemBtn.addEventListener('click', function() {
        let sum = 0;
        for (i = 0; i < expensesItem.length; i++) {
          var a = expensesItem[i].value, 
              b = expensesItem[++i].value;  

          if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
              && a != '' && b != '' && a.length < 50) {
                  console.log("done");
                  appData.expenses[a] = b;
                  sum += +b;
              } else {                            
                    console.log ("bad result");
                    i--;
                    }
        }
        expensesValue.textContent = sum;
    });

    optionalexpensesBtn.addEventListener('click', function() {
      for (let i = 0; i <= optionalexpensesItem.length; i++) {
        let questionOptExpenses = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = questionOptExpenses;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
      }
    });

    countBudgetBtn.addEventListener('click', function() {
      if (appData.budjet != undefined) {
        appData.moneyPerDay = ((appData.budjet - +expensesValue.textContent)/30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay<100) {
          levelValue.textContent = 'Минимальный уровень достатка'; 
        } else if (appData.moneyPerDay>100 && appData.moneyPerDay<2000) {
           levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
          levelValue.textContent = "Высокий уровень";
        } else {
          levelValue.textContent = "Ошибка";}
    
      } else {
        daybudgetValue.textContent = "Произошла ошибка";
      }
    });

    incomeItem.addEventListener('change', function() {
      var items = incomeItem.value;
      appData.income = items.split(", ");
      incomeValue.textContent = appData.income;
    });

    checkSavings.addEventListener('click', function() {
        if (appData.savings == true) {
          appData.savings = false;
        } else {
          appData.savings = true;
        }
    });

    chooseSum.addEventListener('input', function() {
      if (appData.savings == true) {
          let sum = +chooseSum.value,
              percent = +choosePercent.value;

          appData.monthIncome = (sum/100/12*percent).toFixed(2);
          appData.yearIncome = (sum/100*percent).toFixed(2);

          monthsavingsValue.textContent = appData.monthIncome;
          yearsavingsValue.textContent = appData.yearIncome;
        }
    });

    choosePercent.addEventListener('input', function() {
      if (appData.savings == true) {
        let sum = +chooseSum.value,
        percent = +choosePercent.value;

        appData.monthIncome = (sum/100/12*percent).toFixed(2);
        appData.yearIncome = (sum/100*percent).toFixed(2);

        monthsavingsValue.textContent = appData.monthIncome;
        yearsavingsValue.textContent = appData.yearIncome;
  }
      });


    var appData = {
    budjet:money,
    timeData:time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
