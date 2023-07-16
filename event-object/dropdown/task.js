const dropdownBtn = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));

function dropdownClassActive() {
    dropdownList.classList.contains('dropdown__list_active') ? dropdownList.classList.remove('dropdown__list_active') : dropdownList.classList.add('dropdown__list_active')
}
dropdownBtn.addEventListener('click', dropdownClassActive)
dropdownLink.forEach( (item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownBtn.textContent = item.textContent;
        dropdownClassActive();
    })
})
document.addEventListener('click', (element) => {
   if (element.target !== dropdownBtn) {
       dropdownList.classList.remove('dropdown__list_active');
}}
)