var lista = document.getElementById('selnum');
var res = document.getElementById('res');
var valores = [];

function adicionar() {
    var num = parseInt(document.getElementById('num').value);
    
    if (num <= 0 || num > 100 || num == "") {
        alert('Digite um número entre 1 e 100!');
        return;
    }

    var options = document.getElementById('selnum').options;
    for (var i = 0; i < options.length; i++){
        if (parseInt(options[i].value) === num){
            alert('Esse número já foi adicionado!')
            return;
        }
    }
    
    var novoOption = document.createElement("option");
    novoOption.value = num;
    novoOption.text = `O valor ${num} foi adicionado.`;
    lista.appendChild(novoOption);
}