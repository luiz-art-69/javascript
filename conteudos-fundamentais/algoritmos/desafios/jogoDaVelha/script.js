// Variável para armazenar o jogador atual (inicia com X)
var jogadorAtual = 'X';
var tabuleiro = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Função para alternar entre jogadores
function alternarJogador() {
    jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
}

// Função para verificar se há um vencedor
function verificarVencedor() {
    // Lógica para verificar linhas, colunas e diagonais para determinar se há um vencedor
}

// Função para verificar se o jogo é um empate
function verificarEmpate() {
    // Verificar se todas as células do tabuleiro estão preenchidas
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    // Limpar o tabuleiro
    // Resetar as variáveis necessárias
}

// Função chamada quando uma célula é clicada
function clicarCelula(linha, coluna) {
    if (tabuleiro[linha][coluna] === '' && !jogoTerminado) {
        // Marcar a célula com o símbolo do jogador atual
        tabuleiro[linha][coluna] = jogadorAtual;
        var celula = document.getElementById("game__play").rows[linha].cells[coluna]
        celula.textContent = jogadorAtual
    }
    alternarJogador()
}

