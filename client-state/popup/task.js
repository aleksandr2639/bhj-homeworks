const modal = document.querySelector('.modal')
const modalCloseButton = document.querySelector('.modal__close')
function getCookie(name) {
    const cookie = document.cookie.split('; ').find(p => p.startsWith(name) + '=')
    return cookie.substring(name.length + 1)
}

window.onload = () => {
    if(getCookie('modalWindow') != 'yes') {
    modal.classList.add('modal_active')
    }
}
modalCloseButton.addEventListener('click', () => {
    modal.classList.remove('modal_active')
    document.cookie = 'modalWindow = yes'
})

