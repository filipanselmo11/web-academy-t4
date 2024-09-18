type Tarefa = [string, Date];

let tarefas: Tarefa[] = [];

const verTarefas = (): void => {
    if (tarefas.length === 0) {
        console.log('Nenhuma tarefa foi encontrada');
    } else {
        console.log('Tarefas');
        tarefas.forEach((tarefa, index) => {
            const [titulo, dataEntrada] = tarefa;
            const dataEntradaFormat = dataEntrada.toLocaleDateString();
            console.log(`
                ${index} - Titulo: ${titulo} - Data de entrada: ${dataEntradaFormat}
            `);
        });
    }
};

const addTarefa = (titulo: string): void => {
    const novaTarefa: Tarefa = [titulo, new Date];
    tarefas.push(novaTarefa);
};

const editarTarefa = (indice: number, novoTitulo: string): void => {
    if (indice >= 0 && indice < tarefas.length) {
        tarefas[indice][0] = novoTitulo;
    }
};

const excluirTarefa = (indice: number): void => {
    if (indice >= 0 && indice < tarefas.length) {
        tarefas.splice(indice, 1);
    } else {
        console.log('Indice invalido');
    }
};
