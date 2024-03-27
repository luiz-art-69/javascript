var num = [5, 6, 10, 8, 9]
num.push(7)
console.log(num[5])
console.log(`O valor de num tem ${num.length} elementos.`)

// Vetores na tela
for (var i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

// Simplificando
for (var i in num){
    console.log(num[i])
}

var i = num.indexOf(2)
if (i == -1){
    console.log(`Valor não encontrado!`)
} else {
    console.log(`O valor está na posição ${i}`)
}