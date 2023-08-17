const loader = document.querySelector('.loader')
const itemElement = document.querySelector('#items')

let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()

xhr.onload = () => {
    if(xhr.status === 200) {
        loader.classList.remove('loader_active')
        const data = JSON.parse(xhr.responseText).response.Valute

        for (valute in data) {
            const amountValute = `<div class="item">
                                     <div class="item__code">
                                          ${data[valute].CharCode}
                                     </div>
                                     <div class="item__value">
                                          ${data[valute].Value}
                                     </div>
                                     <div class="item__currency">
                                           руб.
                                     </div>
                                  </div>`

            itemElement.insertAdjacentHTML('beforeend', amountValute)
        }
    }
}