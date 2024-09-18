let tarefas = [];

let verTarefas = function () {
    let tabela = document.querySelector('#tabelaTarefas');
    let tabelaBody = tabela.querySelector('tbody');

    tabelaBody.innerHTML = '';

    if (tarefas.length === 0) {
        tabela.hidden = true;
    }
    else {
        tabela.hidden = false;
        tarefas.forEach(function (tarefa, index) {
            let titulo = tarefa[0], dataEntrada = tarefa[1];
            let dataEntradaFormat = new Date(dataEntrada).toLocaleDateString();

            let linha = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${titulo}</td>
                    <td>${dataEntradaFormat}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="abrirModalEdicao(${index}, '${titulo}')">
                            Editar
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="excluirTarefa(${index})">
                            Excluir
                        </button>
                    </td>
                </tr>
            `;

            tabelaBody.innerHTML += linha;
        });
    }
};


let addTarefa = function (titulo) {
    let novaTarefa = [titulo, new Date];
    tarefas.push(novaTarefa);
    verTarefas();
};


let editarTarefa = function (indice, novoTitulo) {
    if (indice >= 0 && indice < tarefas.length) {
        tarefas[indice][0] = novoTitulo;
    }
};

let indiceEdicao;

let abrirModalEdicao = (indice, tituloAtual) => {
    indiceEdicao = indice;
    document.querySelector('#novoTitulo').value = tituloAtual;
    let modal = new bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
};

let confirmarEdicao = () => {
    let novoTitulo = document.querySelector('#novoTitulo').value;

    editarTarefa(indiceEdicao, novoTitulo);

    let modal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
    modal.hide();

    verTarefas();
};


let excluirTarefa = function (indice) {
    if (indice >= 0 && indice < tarefas.length) {
        tarefas.splice(indice, 1);
        verTarefas();
    } else {
        console.log('Indice inválido');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formTodo').addEventListener('submit', (event) => {
        event.preventDefault();

        let titulo = document.getElementById('titulo').value;
        let data = document.getElementById('data').value;

        addTarefa(titulo, data);

        document.getElementById('titulo').value = '';
        document.getElementById('data').value = '';

        let modal = bootstrap.Modal.getInstance(document.getElementById('todoModal'));
        modal.hide();
    });
});
