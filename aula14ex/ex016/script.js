function contar() {
    let inicio = document.getElementById('txti') // Vai pegar o valor inserido no campo relacionado a esse id no html
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // Se o valor inserido no campo inicio ou fim ou passo forem iguais a 0
        window.alert(`[ALERTA] Dados incompatíveis para a contagem! \u{1F440}`) 
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F9BF} `
            }
            res.innerHTML += `FIM! \u{1F3C1}`
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F9BF} `
            }
            res.innerHTML += `FIM! \u{1F3C1}`
        }
    }
}