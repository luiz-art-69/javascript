var res = document.getElementById('resultado')

// Função para obter as respostas do gabarito
function obterRespostasGabarito() {
    const respostasGabarito = [];
    for (let i = 1; i <= 5; i++) {
        const resposta = document.getElementById(`respostasGabarito${i}`).value.toUpperCase();
        respostasGabarito.push(resposta);
    }
    return respostasGabarito;
}

// Função para adicionar o gabarito
function adicionarGabarito() {
    const gabarito = obterRespostasGabarito();
    console.log('Gabarito:', gabarito);
}

// Função para adicionar um campo para um novo aluno
function adicionarAluno() {
    const container = document.getElementById('alunosContainer');
    const alunoIndex = container.children.length + 1;

    const alunoHTML = `
        <div>
            <h3>Aluno ${alunoIndex}</h3>
            <input type="text" id="nomeAluno${alunoIndex}" placeholder="Nome do Aluno">
            <input type="text" id="respostaAluno${alunoIndex}1" placeholder="Questão 1">
            <input type="text" id="respostaAluno${alunoIndex}2" placeholder="Questão 2">
            <input type="text" id="respostaAluno${alunoIndex}3" placeholder="Questão 3">
            <input type="text" id="respostaAluno${alunoIndex}4" placeholder="Questão 4">
            <input type="text" id="respostaAluno${alunoIndex}5" placeholder="Questão 5">
        </div>
    `;

    container.innerHTML += alunoHTML;
}

function obterRespostasAlunos() {
    const alunos = [];
    const container = document.getElementById('alunosContainer');
    const alunosInputs = container.querySelectorAll('input[type="text"]');
    
    for (let i = 0; i < alunosInputs.length; i += 6) {
        const nomeAluno = alunosInputs[i].value;
        const respostasAluno = [];
        
        for (let j = i + 1; j < i + 6; j++) {
            respostasAluno.push(alunosInputs[j].value.toUpperCase());
        }
        
        const aluno = {
            nome: nomeAluno,
            respostas: respostasAluno
        };
        
        alunos.push(aluno);
    }
    
    return alunos;
}

function calcularNotas() {
    const gabarito = obterRespostasGabarito();
    const alunos = obterRespostasAlunos();
    const notas = [];
    
    for (let i = 0; i < alunos.length; i++) {
        const respostasAluno = alunos[i].respostas;
        const nota = calcularNotaAluno(respostasAluno, gabarito);
        notas.push(nota);
    }
    
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpar conteúdo anterior

    // Imprimir nome do aluno com sua nota
    for (let i = 0; i < alunos.length; i++) {
        const alunoNome = alunos[i].nome;
        const alunoNota = notas[i];
        const paragrafo = document.createElement("p");
        paragrafo.textContent = `${alunoNome}: ${alunoNota}`;
        resultadoDiv.appendChild(paragrafo);
    }
}

// Função para calcular a nota de um aluno com base no gabarito
function calcularNotaAluno(respostasAluno, gabarito) {
    let nota = 0;
    for (let i = 0; i < gabarito.length; i++) {
        if (respostasAluno[i] === gabarito[i]) {
            nota+=2;
        }
    }
    return nota;
}

function calcularMedia() {
    const gabarito = obterRespostasGabarito();
    const alunos = obterRespostasAlunos();
    const notas = [];
    
    // Calcular as notas de cada aluno
    for (let i = 0; i < alunos.length; i++) {
        const respostasAluno = alunos[i].respostas;
        const nota = calcularNotaAluno(respostasAluno, gabarito);
        notas.push(nota);
    }

    // Calcular a soma de todas as notas
    const somaNotas = notas.reduce((acc, nota) => acc + nota, 0);

    // Calcular a média das notas
    const media = somaNotas / alunos.length;

    const resultadoDiv = document.getElementById("resultado");
    const paragrafoM = document.createElement("p");
        paragrafoM.textContent = `Media da turma: ${media}`;
        resultadoDiv.appendChild(paragrafoM);
}