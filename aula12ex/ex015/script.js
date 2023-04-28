function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade} ano(s)` // Para testar
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'masculino'
            if (idade >= 0 && idade <= 2) {
                // Menino bebê
                img.setAttribute('src', 'homem-bebe.png')
            } else if (idade > 2 && idade <= 11) {
                // Menino criança
                img.setAttribute('src', 'homem-crianca.png')
            } else if (idade > 11 && idade <= 18) {
                // Menino adolescente
                img.setAttribute('src', 'homem-adolescente.png')
            } else if (idade > 18 && idade <= 40) {
                // Homem adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else if (idade > 40 && idade <= 60) {
                // Homem adulto meia idade
                img.setAttribute('src', 'homem-meia-idade.png')
            } else if (idade > 60 && idade <= 110) {
                // Homem idoso
                img.setAttribute('src', 'homem-idoso.png')
            } else {
                // Erro - default
                img.setAttribute('src', 'familia-dinossauro-ovo.png')
            }
        } else if (fsex[1].checked) {
            genero = 'feminino'
            if (idade >= 0 && idade <= 2) {
                // Menina bebê
                img.setAttribute('src', 'mulher-bebe.png')
            } else if (idade > 2 && idade <= 11) {
                // Menina criança
                img.setAttribute('src', 'mulher-crianca.png')
            } else if (idade > 11 && idade <= 18) {
                // Menina adolescente
                img.setAttribute('src', 'mulher-adolescente.png')
            } else if (idade > 18 && idade <= 40) {
                // Mulher adulta
                img.setAttribute('src', 'mulher-adulta.png')
            } else if (idade > 40 && idade <= 60) {
                // Mulher adulta meia idade
                img.setAttribute('src', 'mulher-meia-idade.png')
            } else if (idade > 60 && idade <= 110) {
                // Mulher idosa
                img.setAttribute('src', 'mulher-idosa.png')
            } else {
                // Erro - default
                img.setAttribute('src', 'familia-dinossauro-ovo.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos alguém do gênero ${genero} com ${idade} ano(s).` // Para testar
        res.appendChild(img)
    }
}