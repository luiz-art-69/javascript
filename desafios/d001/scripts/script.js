function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = 'rgb(214, 186, 107)'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = 'rgb(235, 180, 97)'
    } else {
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = 'rgb(97, 92, 86)'
    }
}