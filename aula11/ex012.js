var agora = new Date() // Para considerar a data atual do sistema do usuário
var hora = agora.getHours() // Para considerar o horário atual do sistema do usuário

console.log(`Agora são exatamente ${hora} hora(s).`)

if (hora >= 6 && hora <= 12) {
    console.log('Bom dia!')
} else if (hora > 12 && hora <= 18) {
    console.log('Boa tarde!')
} else if (hora > 18 && hora <= 24) {
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}