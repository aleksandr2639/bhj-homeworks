const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = document.querySelectorAll('.tab__content');
tab.forEach((item) => {
    item.addEventListener('click', () => {
        tab.forEach((item) => item.classList.remove('tab_active'));
        tabContent.forEach((item) => item.classList.remove('tab__content_active'));
        index = tab.indexOf(item);
        tab[index].classList.add('tab_active');
        tabContent[index].classList.add('tab__content_active');
    });
});





