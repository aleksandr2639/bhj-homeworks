const textEditor = document.querySelector('#editor')
const buttonClear = document.querySelector('.btn')
window.addEventListener('load', () => {
    textEditor.addEventListener('input', () => {
        localStorage.setItem('text', textEditor.value);
    })
        textEditor.value = localStorage.getItem('text');
})

buttonClear.addEventListener('click', () => {
    localStorage.removeItem('text');
    textEditor.value ='';
})