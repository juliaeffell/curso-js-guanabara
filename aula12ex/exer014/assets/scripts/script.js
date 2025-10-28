function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var corpo = window.document.getElementById('corpo')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'assets/images/manha.png'
        corpo.style.background = 'blue'
    } else if (hora >= 12 && hora <18) {
        img.src = 'assets/images/tarde.png'
        corpo.style.background = 'red'
    } else {
        img.src = 'assets/images/noite.png'
        corpo.style.background = 'green'
    }
}

carregar()