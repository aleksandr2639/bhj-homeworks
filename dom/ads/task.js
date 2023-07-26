const rotator = document.querySelectorAll('.rotator__case')
let rotIndex = 0

function rotatorElement() {
    for (let i = 0; i < rotator.length; i++) {
        rotator[i].classList.remove('rotator__case_active');
        rotator[i].style.color = rotator[i].dataset.color

    }
    rotator[rotIndex].classList.add('rotator__case_active')

    if (rotIndex == rotator.length - 1) {
        rotIndex = 0
    } else rotIndex++
}


setInterval(rotatorElement, 1000)