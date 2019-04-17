var menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    menuItemLi = document.createElement('li'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    promt = document.querySelector('#prompt'),
    question;

menu.insertBefore(menuItem[2], menuItem[1]); // меняем элементы местами

menuItemLi.classList.add("menu-item");   //добавляем  новый элемент
menuItemLi.innerHTML = 'Пятый пункт';
menu.appendChild(menuItemLi);

document.body.style.backgroundImage = "url('img/apple_true.jpg')"; // Меняем фон

title.textContent = "Мы продаем только подлинную технику Apple"; // Меняем  заголовок

adv.remove(); // Удаляем элемент


question = prompt('Ваше отношение к технике Apple?');
promt.textContent = question;