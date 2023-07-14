let getHole = index => document.getElementById(`hole${index}`);
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let winHole = 0
let lostHole = 0

function gameChecked (dead, lost) {
    if (dead === 10) {
        alert("Вы победили!");
        location.reload();
    }
    if (lost === 5) {
        alert("Вы проиграли!");
        location.reload();
    };
};

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (getHole(i).className.includes('hole_has-mole')) {
            winHole += 1;
            dead.textContent = winHole;
        } else {
            lostHole += 1;
            lost.textContent = lostHole;
        };
        gameChecked(winHole, lostHole);
    };
};