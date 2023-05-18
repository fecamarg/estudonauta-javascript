function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2, 7)) // Se colocar somente um valor, o n2 será considerado como indefinido, e retornará NaN, não é um número. Exceto que o valor de um deles já seja definido no parâmetro da função.