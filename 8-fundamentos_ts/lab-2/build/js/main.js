"use strict";
class Aluno {
    constructor(id, nomeCompleto, idade, altura, peso) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    ;
    getId() {
        return this.id;
    }
    ;
    setId(id) {
        this.id = id;
    }
    getNomeCompleto() {
        return this.nomeCompleto;
    }
    ;
    setNomeCompleto(nomeCompleto) {
        this.nomeCompleto = nomeCompleto;
    }
    getIdade() {
        return this.idade;
    }
    ;
    setIdade(idade) {
        this.idade = idade;
    }
    getAltura() {
        return this.altura;
    }
    ;
    setAltura(altura) {
        this.altura = altura;
    }
    getPeso() {
        return this.peso;
    }
    ;
    setPeso(peso) {
        this.peso = peso;
    }
}
;
class Turma {
    constructor(alunos = []) {
        this.alunos = alunos;
        this.id = 1;
        this.nome = 'Turma de Educacao Fisica';
        this.alunos = alunos;
    }
    ;
    getIdTurma() {
        return this.id;
    }
    ;
    getNomeTurma() {
        return this.nome;
    }
    ;
    addAluno(aluno) {
        this.alunos.push(aluno);
    }
    ;
    editarAluno(id, alunoEditado) {
        this.alunos.forEach((aluno, indice) => {
            if (aluno.getId() === id) {
                this.alunos[indice] = alunoEditado;
            }
        });
        if (!alunoEditado) {
            console.log('Aluno não encontrado');
        }
    }
    ;
    removerAluno(id) {
        this.alunos = this.alunos.filter(aluno => aluno.getId() !== id);
    }
    ;
    listarAlunos() {
        this.alunos.forEach((aluno) => {
            console.log(`${aluno.getId()}: ${aluno.getNomeCompleto()}, Idade: ${aluno.getIdade()}, Altura: ${aluno.getAltura()}, Peso: ${aluno.getPeso()} `);
        });
    }
    ;
    getQtdAlunos() {
        return this.alunos.length;
    }
    ;
    getMediaIdades() {
        let totalIdade = 0;
        this.alunos.forEach((aluno) => {
            totalIdade += aluno.getIdade();
        });
        return totalIdade / this.alunos.length;
    }
    ;
    getMediaAlturas() {
        let totalAltura = 0;
        this.alunos.forEach((aluno) => {
            totalAltura += aluno.getAltura();
        });
        return totalAltura / this.alunos.length;
    }
    getMediaPesos() {
        let totalPeso = 0;
        this.alunos.forEach((aluno) => {
            totalPeso += aluno.getPeso();
        });
        return totalPeso / this.alunos.length;
    }
    ;
}

let aluno1 = new Aluno(1, 'João Silva', 20, 1.80, 75);
let aluno2 = new Aluno(2, 'Maria Julia', 21, 1.85, 65);

let turma = new Turma([aluno1, aluno2]);

let indiceEdicao = 0;

const atualizarEstatistica = () => {
    const qtAlunosElement = document.getElementById('qtd-alunos');
    qtAlunosElement.innerHTML = `Quantidade de alunos matriculados: ${parseInt(turma.getQtdAlunos())}`;

    const mediaIdadesElement = document.getElementById('media-idades');
    mediaIdadesElement.innerHTML = `Média das idades: ${parseInt(turma.getMediaIdades())}`;

    const mediaPesosElement = document.getElementById('media-pesos');
    mediaPesosElement.innerHTML = `Média dos pesos: ${parseFloat(turma.getMediaPesos()).toFixed(2)}`;

    const mediaAlturasElement = document.getElementById('media-alturas');
    mediaAlturasElement.innerHTML = `Média das alturas: ${parseFloat(turma.getMediaAlturas()).toFixed(2)}`;
};

const atualizarTabela = () => {
    const tbodyElement = document.querySelector('#tableAlunos tbody');
    tbodyElement.innerHTML = '';

    turma.alunos.forEach((aluno) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${aluno.getId()}</td>
            <td>${aluno.getNomeCompleto()}</td>
            <td>${aluno.getIdade()}</td>
            <td>${aluno.getAltura()}</td>
            <td>${aluno.getPeso()}</td>
            <td>
                <button
                    class="btn btn-warning me-3"
                    type="button"
                    onclick="abrirModalEdicao(${aluno.getId()}, '${aluno.getNomeCompleto()}', ${aluno.getIdade()}, ${aluno.getAltura()}, ${aluno.getPeso()})">Editar</button>
                <button
                    class="btn btn-danger"
                    type="button"
                    onclick="removerAluno(${aluno.getId()})">Excluir</button>
            </td>
            
        `;
        tbodyElement.appendChild(row);
        document.getElementById('tableAlunos').removeAttribute('hidden');
    });
};

const abrirModalEdicao = (indice, nomeEditado, idadeEditado, alturaEditado, pesoEditado) => {
    indiceEdicao = indice;
    document.querySelector('#nomeEditado').value = nomeEditado;
    document.querySelector('#idadeEditado').value = idadeEditado;
    document.querySelector('#alturaEditado').value = alturaEditado;
    document.querySelector('#pesoEditado').value = pesoEditado;

    let modal = new bootstrap.Modal(document.getElementById('editAlunoModal'));
    modal.show();
};

const confirmarEdicao = () => {
    const nomeEditado = document.querySelector('#nomeEditado').value;
    const idadeEditado = parseInt(document.querySelector('#idadeEditado').value);
    const alturaEditado = parseFloat(document.querySelector('#alturaEditado').value);
    const pesoEditado = parseFloat(document.querySelector('#pesoEditado').value);

    const alunoEditado = new Aluno(indiceEdicao, nomeEditado, idadeEditado, alturaEditado, pesoEditado);

    turma.editarAluno(indiceEdicao, alunoEditado);

    let modal = bootstrap.Modal.getInstance(document.getElementById(('editAlunoModal')));
    modal.hide();

    atualizarTabela();

    atualizarEstatistica();
};

const removerAluno = (id) => {
    turma.removerAluno(id);
    atualizarTabela();
    atualizarEstatistica();
}

document.addEventListener('DOMContentLoaded', () => {
    const turmaElement = document.getElementById('turma');
    turmaElement.innerHTML = `Bem vindo a ${turma.nome}`;

    atualizarTabela();

    atualizarEstatistica();

    document.getElementById('tableAlunos').removeAttribute('hidden');

    document.getElementById('formAluno').addEventListener('submit', (event) => {
        event.preventDefault();

        const nomeCompleto = document.getElementById('nomeCompleto').value;
        const idade = parseInt(document.getElementById('idade').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const peso = parseFloat(document.getElementById('peso').value);

        const id = turma.getQtdAlunos() + 1;

        const novoAluno = new Aluno(id, nomeCompleto, idade, altura, peso);

        turma.addAluno(novoAluno);

        atualizarTabela();

        event.target.reset();

        let modal = bootstrap.Modal.getInstance(document.getElementById('alunoModal'));
        modal.hide();

        atualizarEstatistica();

    });
});

