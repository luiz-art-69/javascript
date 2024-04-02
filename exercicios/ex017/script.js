// Definindo uma lista de tarefas inicial
let listaDeTarefas = [
    { id: 1, descricao: 'Fazer compras', status: 'pendente' },
    { id: 2, descricao: 'Estudar JavaScript', status: 'pendente' },
    { id: 3, descricao: 'Lavar o carro', status: 'concluído' }
];

// Função para adicionar uma nova tarefa à lista
function adicionarTarefa(descricao) {
    const novaTarefa = {
        id: listaDeTarefas.length + 1,
        descricao: descricao,
        status: 'pendente'
    };
    listaDeTarefas.push(novaTarefa);
    atualizarListaTarefas();
}

// Função para excluir uma tarefa da lista
function excluirTarefa(id) {
    listaDeTarefas = listaDeTarefas.filter(tarefa => tarefa.id !== id);
    atualizarListaTarefas();
}

// Função para ler todas as tarefas na lista e exibir na página
function atualizarListaTarefas() {
    const listaTarefasElement = document.getElementById('lista-tarefas');
    listaTarefasElement.innerHTML = ''; // Limpa a lista antes de adicionar as tarefas

    listaDeTarefas.forEach(tarefa => {
        const tarefaItem = document.createElement('li');
        tarefaItem.textContent = tarefa.descricao;

        const excluirButton = document.createElement('button');
        excluirButton.textContent = 'Excluir';
        excluirButton.addEventListener('click', function() {
            excluirTarefa(tarefa.id);
        });

        tarefaItem.appendChild(excluirButton);
        listaTarefasElement.appendChild(tarefaItem);
    });
}

// Função para processar o envio do formulário
document.getElementById('formulario-tarefa').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const descricao = document.getElementById('descricao').value;
    adicionarTarefa(descricao);
    document.getElementById('descricao').value = ''; // Limpa o campo de descrição após adicionar a tarefa
});

// Atualiza a lista de tarefas ao carregar a página
atualizarListaTarefas();
``
