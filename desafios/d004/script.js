function gerarTabuada() {
    var num = parseInt(document.getElementById('num').value)
    var tab = document.getElementById('seltab')
    tab.innerHTML = ''

    if (num == 0) {
      alert('Por favor, digite um número valido!')
    }
      for (var c = 1; c <= 10; c++){
        var item = document.createElement('option')
        item.text = `${num} X ${c} = ${num*c}`
        tab.appendChild(item)
      }
}