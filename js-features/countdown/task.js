const timer = document.getElementById("timer");

let timerId = setInterval(function (){
        if (timer.textContent > 0) {
            timer.textContent--;
        } else alert("Вы победили в конкурсе!"),
        clearInterval(timerId)

},

1000);