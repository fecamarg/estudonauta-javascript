function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes();
    // var hora = 15
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'foto-manha.png'
        document.body.style.background = '#abdefd'
    } else if (hora >=12 && hora <= 18) {
        // Boa tarde
        img.src = 'foto-tarde.png'
        document.body.style.background = '#d9a77e'
    } else {
        // Boa noite!
        img.src = 'foto-noite.png'
        document.body.style.background = '#785e93'
    }
}