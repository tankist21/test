
 var money = +prompt("Ваш бюджет на месяц?", ""),
     time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

var appData = {
    budjet:money,
    timeData:time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (i = 0; i<2; i++) {
    var a = prompt("Введите обязательную статью расходов", ""), 
        b = prompt("Во сколько обойдётся", "");   
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
        && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a]=b;}
            else if ((typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
            && a != '' && b != '' && a.length < 50) === false) {
              a = prompt("Введите обязательную статью расходов", "");
              b = prompt("Во сколько обойдётся", "");
            }
};
//let i = 0;
//while (i < 2) {
   // var a = prompt("Введите обязательную статью расходов", ""), 
     //   b = prompt("Во сколько обойдётся", "");   
    // if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
       // && a != '' && b != '' && a.length < 50) {
         //   console.log("done");
           // appData.expenses[a]=b;}
            //else if ((typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
            //&& a != '' && b != '' && a.length < 50) === false) {
              //  a = prompt("Введите обязательную статью расходов", "");
               // b = prompt("Во сколько обойдётся", "");
            //}; 
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
            //else if ((typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
            //&& a != '' && b != '' && a.length < 50) === false) {
             //   a = prompt("Введите обязательную статью расходов", "");
             //   b = prompt("Во сколько обойдётся", "");
             //   } i++;}
             //   while (i < 2); 
appData.moneyPerDay = appData.budjet/30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay<100) {
    console.log('Минимальный уровень достатка'); 
     } else if (appData.moneyPerDay>100 && appData.moneyPerDay<2000) {
         console.log('Средний уровень достатка');
     } else if (appData.moneyPerDay > 2000) {
         console.log("Высокий уровень");
     } else {
         console.log("Ошибка");}
         console.log(appData);



            
