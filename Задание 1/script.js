
 var money = prompt("Ваш бюджет на месяц?", ""),
     time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

var appData = {
    budjet:money,
    timeData:time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
    var a1 = prompt("Введите обязательную статью расходов", ""), 
        a2 = prompt("Во сколько обойдётся", ""),   
        a3 = prompt("Введите обязательную статью расходов", ""), 
        a4 = prompt("Во сколько обойдётся", "");
    appData.expenses.a1=a2;
    appData.expenses.a3=a4;

alert(appData.budjet/30);

