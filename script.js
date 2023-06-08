
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
    // Меняем кнопку
    document.getElementById('start').style.display = 'none';
    document.getElementById('reset').style.display = 'block';


    // меняем время
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    // счетчик
    let timerFunction = () => {
        // изменение отображения
        document.querySelector('.minutes').innerHTML = workMinutes;  
        document.querySelector('.seconds').innerHTML = seconds; 
        
        seconds = seconds - 1;

        if(seconds === 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes = -1) {
                if(breakCount % 2 === 0) {
                    // начало отдыха
                    workMinutes = breakMinutes;
                    breakCount++

                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                }else {
                    workMinutes = workTime;
                    breakCount++

                    workTitle.classList.add('active');
                    breakTitle.classList.remove('active');
                }
            }
            seconds = 59;
        }
    
    }

    // запуск функции каждую секунду
    setInterval(timerFunction, 1000)
}