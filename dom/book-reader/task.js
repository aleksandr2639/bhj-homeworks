const fontSize = Array.from(document.querySelectorAll('.font-size'))
const textContent = document.querySelector('.book__content')
const color = Array.from(document.querySelectorAll('.color'))
const body = document.querySelector('body')


const clearClass = (element) => {
    element.find(item =>item.classList.remove('font-size_active'))
}
const addClass = (element, index) => {
    element[index].classList.add('font-size_active')
}
fontSize.forEach((item, index) => {
    item.addEventListener('click',() => {
        event.preventDefault();
        clearClass(fontSize)
        addClass(fontSize, index)
        if (item.dataset.size === "small") {
            textContent.classList.add('book_fs-small')
            textContent.classList.remove('book_fs-big')
        } else if (item.dataset.size === "big") {
            textContent.classList.add('book_fs-big')
            textContent.classList.remove('book_fs-small')
        } else {
            textContent.classList.remove('book_fs-big')
            textContent.classList.remove('book_fs-small')
        }
    }
    )
})

const clearClassColor = (element) => {
    element.find(item =>item.classList.remove('color_active'))
}
const addClassColor  = (element, index) => {
    element[index].classList.add('color_active')
}

color.forEach((item, index) => {
    item.addEventListener('click',() => {
        event.preventDefault();
        clearClassColor(color)
        addClassColor(color, index)
        textContent.style.color = item.getAttribute('data-text-color')
        body.style.backgroundColor = item.getAttribute('data-bg-color')

        }
    )
})





