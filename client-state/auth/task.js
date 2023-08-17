const formSign = document.querySelector('#signin__form'),
      formElement = document.querySelector('.signin'),
      formWelcome = document.querySelector('#welcome'),
      buttonSign = document.querySelector('#signin__btn'),
      buttonOut = document.querySelector('#signout__btn')


let xhr = new XMLHttpRequest();
buttonSign.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(formSign);

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);

    xhr.onload = () => {
        if(xhr.status === 201) {
            let valueResponse = JSON.parse(xhr.response);
            if(valueResponse.success) {
                localStorage.userId = valueResponse.user_id;
                formElement.classList.remove('signin_active');
                formWelcome.classList.add('welcome_active');
                document.querySelector('#user_id').textContent = localStorage.userId;
            } else alert('Неверный логин/пароль');
        }
    }
})
buttonOut.addEventListener('click', () => {
        formWelcome.classList.remove('welcome_active');
        formElement.classList.add('signin_active');
        localStorage.clear();
        formSign.reset();
})