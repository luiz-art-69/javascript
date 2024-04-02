// function nome([param[, param[, ... param]]]) {
//     instruções
//  }

// Definindo uma função que calcula a média de uma lista de números
function calcularMedia(numeros) {
    let soma = 0;

    // Percorre a lista e soma todos os números
    for (let numero of numeros) {
        soma += numero;
    }

    // Calcula a média dividindo a soma pelo número total de elementos na lista
    let media = soma / numeros.length;
    
    // Retorna a média calculada
    return media;
}

// Exemplo de uso da função passando uma lista de números como parâmetro
let listaDeNumeros = [10, 20, 30, 40, 50];
let mediaCalculada = calcularMedia(listaDeNumeros);
console.log("A média dos números é:", mediaCalculada);