let num = [5, 8, 2, 9, 3]

// num.sort() // Coloca o vetor em ordem

num.push[1] // Insere o valor na última posição do vetor, acrescentando mais um, não substituindo o último

console.log(`Nosso vetor é o ${num}`)

console.log(`O vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

// for(let pos = 0 ; pos < num.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }

// Ambos os códigos tem a mesma funcionalidade

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// Para buscar valores ou posições em arrays/vetores

let pos = num.indexOf(8) // Buscar valor

if (pos == -1) { // Se o valor resultar em -1, ele não foi encontrado, ou não existe no vetor
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`) // Se ele existir, exibe a posição ou índice dele dentro do vetor
}