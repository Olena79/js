document.querySelector('.form__button').onclick = () => {
    const form = document.getElementById('form')

    const email = document.getElementById('email')

    console.log(email.checkValidity())

    if(!email.checkValidity()) {
        if(email.value.length === 0) {
            email.setCustomValidity('Помилка. Введіть значення.')
        }

        if(email.value.length > 10) {
            email.setCustomValidity('Помилка. Введіть до 10 символів.')
        }

        email.reportValidity()
    }
}

document.querySelectorAll('form__button--add').forEach((elem) => {
    elem.onclick = () => {
        if(elem.getAttribute('operator') === '+') {
            return age.stepUp(Number(elem.getAttribute('value')))
        }

        if(elem.getAttribute('operator') === '-') {
            return age.stepDown(Number(elem.getAttribute('value')))
        }
    
       
    }
})

