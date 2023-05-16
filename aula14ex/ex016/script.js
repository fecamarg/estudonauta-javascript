function contar() {
    let inicio = document.getElementById('txti') // Vai pegar o valor inserido no campo relacionado a esse id no html
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // Se o valor inserido no campo inicio ou fim ou passo for vazio, emite o alerta, senão, segue com a condicional
        window.alert(`[ALERTA] Dados incompatíveis para a contagem! Revise-os! \u{1F440}`) 
    } else {
        res.innerHTML = 'Contando... <br>'

        // Declaração das variáveis
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        // Se passo for menor ou igual a 0, mostra um alerta e considera o valor de Passo como 1
        if (p <= 0) {
            window.alert('Passo inválido! Considerando Passo como valor 1.')
            p = 1
        }
        // Contagem crescente
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F9BF} `
            }
            res.innerHTML += `FIM! \u{1F3C1}`
        } else {
            // Contagem decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F9BF} `
            }
            res.innerHTML += `FIM! \u{1F3C1}`
        }
    }
}