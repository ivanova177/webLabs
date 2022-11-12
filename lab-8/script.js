const btnLove = document.getElementById('calculateLove');
const btnBMI = document.getElementById('calculateBMI');
const btnYear = document.getElementById('calculateYear');
const btnDinner = document.getElementById('calculateDinner');


btnLove.addEventListener('click', ()=>{
    var user1 = prompt("Введите Ваше Имя:");
    var user2 = prompt("Введите Имя Вашего Партнера:");
    alert(`Совместимость: ${user1} и ${user2} ` + Math.floor(Math.random() * 100) + " %");
})

btnBMI.addEventListener('click', ()=>{

    var weight = prompt("Введите ваш вес(кг):");
    var height = prompt("Введите ваш рост(м):");

    imt = weight / (Math.pow(height, 2));

    if (imt <= 18.5){
        alert("Недостаточный веса");
    };
    if (imt <= 25 && imt > 18.5){
        alert("Нормальный вес");
    };
    if (imt <= 30 && imt > 25){
        alert("У вас излишек веса");
    }
    if (imt > 30){
        alert("Ожирение");
    };
})

btnYear.addEventListener('click', ()=>{
    var year = prompt("Введите год:");

    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        alert("Високосный год");
    }
    else {
        alert("Не является високосным");
    }
})

btnDinner.addEventListener('click', ()=>{
    var size = prompt("Введите количество человек");

    let count = new Array();
    for (i = 0; i < size; ++i) {
        var person = prompt(`Введите имя ${i + 1}`);
        count[i] = person;
    }
    alert("Ужин оплачивает: " + count[Math.floor(Math.random() * size)]);
})