const clickButton = document.getElementById("clicker__counter")
const cookie = document.getElementById("cookie")
let counter = 0

cookie.onclick = () => {
    counter++;
    clickButton.textContent = String(counter);
    counter % 2 === 0 ? cookie.width = 200: cookie.width = 150;
}