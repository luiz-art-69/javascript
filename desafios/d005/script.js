var numeros = [];
var mensagem = document.getElementById('mensagem')

function adicionarNumero() {
    var numeroInput = document.getElementById('numero');
    var numero = parseInt(numeroInput.value);

    if (isNaN(numero) || numero < 1 || numero > 100) {
        alert('Digite um número válido entre 1 e 100!');
        return;
    }

    if (numeros.includes(numero)) {
        alert('Este número já foi adicionado!');
        return;
    }

    var select = document.getElementById('numerosSelecionados');
    var option = document.createElement('option');
    option.value = numero;
    option.text = `Valor ${numero} adicionado`;
    select.appendChild(option);
    mensagem.innerHTML = ''

    numeroInput.value = ''
    numeroInput.focus()

    numeros.push(numero);
}


function finalizar(){
    if (numeros.length === 0){
        alert(`Nenhum número adicionado!`)
        return
    }
    
    var menorValor = numeros[0]
    var maiorValor = numeros[0]
    var soma = 0

    for (var i = 0; i < numeros.length; i++){
        soma += numeros[i]
        
        if (numeros[i] > maiorValor){
            maiorValor = numeros[i]
        }
    
        if (numeros[i] < menorValor){
            menorValor = numeros[i]
        }
    }

    var media = soma / numeros.length

    mensagem.innerHTML += `<p>Ao todo, temos <strong>${numeros.length}</strong> números cadastrados.</p>`;
    mensagem.innerHTML += `<p>O maior valor informado foi <strong>${maiorValor}</strong>.</p>`;
    mensagem.innerHTML += `<p>O menor valor informado foi <strong>${menorValor}</strong>.</p>`;
    mensagem.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong>.</p>`;
    mensagem.innerHTML += `<p>A média dos valores digitados é <strong>${media}</strong>.</p>`;
}

function limpar(){
    mensagem.innerHTML = ''
    document.querySelector('select#numerosSelecionados').innerHTML = ''
    numeros.innerHTML = ''
    numeroInput = ''
}