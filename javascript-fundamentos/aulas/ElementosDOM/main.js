
const submitButton = document.querySelector('#submit-button')
const errorMsg = document.querySelector('#msg')
const items = document.querySelector('.items')
const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')

// Quando o Submit for clicado
submitButton.addEventListener('click', function (e) {
    e.preventDefault()

    const nameValue = nameInput.value
    const emailValue = emailInput.value

    // Msg de preenchimeento de campos
    if (nameValue === '' || emailValue === '') {
        errorMsg.classList = "errorMsg"
        errorMsg.innerText = 'Please fill out the fields!'
        return
    }

    // Criação de info de Nome e Email
    // items.innerHTML = `<li class="item">Nome: <strong>${nameValue}</strong></li>`
    // items.innerHTML += `<li class="item">Email: <strong>${emailValue}</strong></li>`

    // Alternativa
    const li = document.createElement('li')
    li.classList = 'item'
    li.innerHTML = `Nome: <strong>${nameValue}</strong> <br/> Email: <strong>${emailValue}</strong>`

    items.appendChild(li)
    nameInput.value = ""
    emailInput.value = ""
})

// Tirar Msg quando nameInput, emailInput for alterado
nameInput, emailInput.addEventListener("change", function() {
    errorMsg.classList = ''
    errorMsg.innerText = ''
});

