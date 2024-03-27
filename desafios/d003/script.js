function calc() {
    var inicio = parseInt(document.getElementById('inicio').value)
    var fim = parseInt(document.getElementById('fim').value)
    var passo = parseInt(document.getElementById('passo').value)
    var sequencia = ''
    
    if (passo <= 0 || inicio == 0 || fim == 0){
        alert("O passo deve ser um número positivo maior que zero.");
        return;
      } 

      if (inicio < fim) {
        for (var i = inicio; i <= fim; i += passo) {
          sequencia += i + " ⇒ ";
        }
      } else {
        for (var i = inicio; i >= fim; i -= passo)
        sequencia += i + " ⇒ ";
      }
    
      document.getElementById("sequencia").innerText = `Sequência fornecida: ${sequencia} 🏴`
    }