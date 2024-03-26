function calcIdade() {
    var anoNascimento = parseInt(document.getElementById('anoNascimento').value);
    var anoAtual = new Date().getFullYear();
    var idade = anoAtual - anoNascimento;
    var sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
    var imagem = document.getElementById('imagem');
    var sexo = '';

    if (anoNascimento == 0 || anoNascimento > anoAtual) {
        window.alert('[ERRO]! Dados inválidos, tente novamente.');
        return; // Encerra a função caso haja dados inválidos
    }
    
    if (sexoSelecionado) {
        sexo = sexoSelecionado.value;
    } else {
        alert("Por favor, selecione o sexo.");
        return; // Encerra a função se o sexo não for selecionado
    }

    // Define o prefixo para o nome da imagem com base no sexo
    var prefixo = sexo == 'Masculino' ? 'mas' : 'fem';

    // Determina a faixa etária
    var faixaEtaria = '';
    if (idade >= 0 && idade <= 10) {
        faixaEtaria = 'crianca';
    } else if (idade < 35) {
        faixaEtaria = 'jovem';
    } else if (idade < 60) {
        faixaEtaria = 'adulto';
    } else {
        faixaEtaria = 'idoso';
    }

    // Define o caminho da imagem com base no sexo e na faixa etária
    var caminhoImagem = `imagens/${faixaEtaria}-${prefixo}.jpg`;
    
    // Atualiza o atributo src da imagem
    imagem.src = caminhoImagem;

    // Exibe idade e sexo na página HTML
    document.getElementById('msg').textContent = `Sua idade é ${idade} anos e você é do sexo ${sexo}.`;
}