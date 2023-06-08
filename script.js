
let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;

let seconds = '00';


// отображаем
window.onload = () => {                                       //при загрузке страницы  
    document.querySelector('.minutes').innerHTML = workTime;  //минуты на странице равны worktime 
    document.querySelector('.seconds').innerHTML = seconds;   //секунды равны секундам

    workTitle.classList.add('active');                        //подсвечиваем заголовок через класс active 
};


// старт таймера
function start() {
    
}