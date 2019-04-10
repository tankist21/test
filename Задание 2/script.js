let money, time;
function start () {
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
    savings: true
};

function chooseExpenses() {
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

}
chooseExpenses();
//let i = 0;
//while (i < 2) {
   // var a = prompt("Введите обязательную статью расходов", ""), 
     //   b = prompt("Во сколько обойдётся", "");   
    // if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
       // && a != '' && b != '' && a.length < 50) {
         //   console.log("done");
           // appData.expenses[a]=b;}
            //else {
//          console.log ("bad result");
//          i--;
//     }
            //i++;
//}
//let i = 0;
//do {
  //  var a = prompt("Введите обязательную статью расходов", ""), 
    //    b = prompt("Во сколько обойдётся", "");   
    //if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
      //  && a != '' && b != '' && a.length < 50) {
        //    console.log("done");
          //  appData.expenses[a]=b;}
            //else {
//          console.log ("bad result");
//          i--;
//     } i++;}
             //   while (i < 2); 
function detectDayBudget() {
    appData.moneyPerDay = (appData.budjet/30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  }
  detectDayBudget();
  
  function detectLevel() {
    if (appData.moneyPerDay<100) {
      console.log('Минимальный уровень достатка'); 
       } else if (appData.moneyPerDay>100 && appData.moneyPerDay<2000) {
           console.log('Средний уровень достатка');
       } else if (appData.moneyPerDay > 2000) {
           console.log("Высокий уровень");
       } else {
           console.log("Ошибка");}
           console.log(appData);
  
  }

  detectLevel();

function checkSavings() {
    if (appData.savings == true) {
      var save = +prompt("Какова сумма накоплений"),
          percent = + prompt("Под какой процент?");

      appData.monthIncome = (save/100/12*percent).toFixed(2);
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

    checkSavings();        

    function chooseOptExpenses() {                             // Функция для определения необязательных расходов

      for (let i = 1; i <= 3; i++) {
          let questionOptExpenses = prompt("Статья необязательных расходов?");
          appData.optionalExpenses[i] = questionOptExpenses;
          console.log(appData.optionalExpenses);
      }
  
  
  }
  chooseOptExpenses();