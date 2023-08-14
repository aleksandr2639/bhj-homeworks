const pollTitle = document.getElementById('poll__title')
const pollAnswer = document.getElementById('poll__answers')

let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send()
xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
            const data = JSON.parse(xhr.responseText).data
            pollTitle.innerText = data.title
            data.answers.forEach((answer) => {
                const valueAnswer = `<button class="poll__answer">${answer}</button>`
                pollAnswer.insertAdjacentHTML('beforeend',valueAnswer)
                })
            const button = Array.from(document.querySelectorAll('.poll__answer'))
            button.forEach((item) => item.addEventListener('click', () =>
            alert('Спасибо, ваш голос засчитан!')
            ))
    }
})


