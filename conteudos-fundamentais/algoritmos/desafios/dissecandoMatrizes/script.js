var matriz = []

for (var l = 0; l < 4; l++){
    var linha = []
    for(var c = 0; c < 4; c++){
        var valor = parseInt(prompt(`Digite um valor para a posição [${l}, ${c}]`))
        linha.push(valor)
    }
    matriz.push(linha)
}

function matrizParaTabela(matriz) {
    var html = "<table>"
    for (var i = 0; i < matriz.length; i++){
        html += '<tr>'
            for (var j = 0; j < matriz[i].length; j++){
                var cellId = 'celula-' + i + '-' + j
                html += '<td id="' + cellId + '">' + matriz[i][j] + '</td>'
            }
        html += '</tr>'
    }
    html += '</table>'
    return html
}

var tabelaContainer = document.getElementById("tabelaContainer")

tabelaContainer.innerHTML = matrizParaTabela(matriz)
var cells = tabelaContainer.getElementsByTagName("td");

function mostrarDP() {
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = "";
    }
    document.getElementById("celula-0-0").style.backgroundColor = "lightcoral";
    document.getElementById("celula-1-1").style.backgroundColor = "lightcoral";
    document.getElementById("celula-2-2").style.backgroundColor = "lightcoral";
    document.getElementById("celula-3-3").style.backgroundColor = "lightcoral";
}

function mostrarTS() {
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = "";
    }
    document.getElementById("celula-0-1").style.backgroundColor = "lightblue";
    document.getElementById("celula-0-2").style.backgroundColor = "lightblue";
    document.getElementById("celula-0-3").style.backgroundColor = "lightblue";
    document.getElementById("celula-1-2").style.backgroundColor = "lightblue";
    document.getElementById("celula-1-3").style.backgroundColor = "lightblue";
    document.getElementById("celula-2-3").style.backgroundColor = "lightblue";
}

function mostrarTI() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "";
  }
    document.getElementById("celula-1-0").style.backgroundColor = "lightgreen";
    document.getElementById("celula-2-0").style.backgroundColor = "lightgreen";
    document.getElementById("celula-2-1").style.backgroundColor = "lightgreen";
    document.getElementById("celula-3-0").style.backgroundColor = "lightgreen";
    document.getElementById("celula-3-1").style.backgroundColor = "lightgreen";
    document.getElementById("celula-3-2").style.backgroundColor = "lightgreen";
}
