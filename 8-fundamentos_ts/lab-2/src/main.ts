
class Aluno {
    private id: number;
    private nomeCompleto: string;
    private idade: number;
    private altura: number;
    private peso: number;

    constructor(id: number, nomeCompleto: string, idade: number, altura: number, peso: number) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    };

    public getId(): number {
        return this.id;
    };

    public setId(id: number): void {
        this.id = id;
    }

    public getNomeCompleto(): string {
        return this.nomeCompleto;
    };

    public setNomeCompleto(nomeCompleto: string): void {
        this.nomeCompleto = nomeCompleto;
    }

    public getIdade(): number {
        return this.idade;
    };

    public setIdade(idade: number): void {
        this.idade = idade;
    }

    public getAltura(): number {
        return this.altura;
    };

    public setAltura(altura: number): void {
        this.altura = altura;
    }

    public getPeso(): number {
        return this.peso;
    };

    public setPeso(peso: number): void {
        this.peso = peso;
    }

};

class Turma {
    private id: number;
    private nome: string;
    private alunos: Aluno[] = [];

    constructor(alunos: Aluno[]) {
        this.id = 1;
        this.nome = 'Turma de Educacao Fisica';
        this.alunos = alunos;
    };

    getIdTurma(): number {
        return this.id;
    };

    getNomeTurma(): string {
        return this.nome;
    };

    addAluno(aluno: Aluno): void {
        this.alunos.push(aluno);
    };

    editarAluno(id: number, alunoEditado: Aluno): void {
        let alunoEncontrado;
        this.alunos.forEach((aluno, indice) => {
            if (aluno.getId() === id) {
                this.alunos[indice] = alunoEditado;
                alunoEncontrado = true;
            }
        });

        if (!alunoEditado) {
            console.log('Aluno não encontrado');
        }
    };

    removerAluno(id: number): void {
        this.alunos = this.alunos.filter(aluno => aluno.getId() !== id);
    };

    listarAlunos(): void {
        this.alunos.forEach((aluno) => {
            console.log(`${aluno.getId()}: ${aluno.getNomeCompleto()}, Idade: ${aluno.getIdade()}, Altura: ${aluno.getAltura()}, Peso: ${aluno.getPeso()} `);
        });
    };

    getQtdAlunos(): number {
        return this.alunos.length;
    };

    getMediaIdades(): number {
        let totalIdade = 0;
        this.alunos.forEach((aluno) => {
            totalIdade += aluno.getIdade();
        });

        return totalIdade / this.alunos.length;
    };

    getMediaAlturas(): number {
        let totalAltura = 0;
        this.alunos.forEach((aluno) => {
            totalAltura += aluno.getAltura();
        });

        return totalAltura / this.alunos.length;
    }

    getMediaPesos(): number {
        let totalPeso = 0;
        this.alunos.forEach((aluno) => {
            totalPeso += aluno.getPeso();
        });

        return totalPeso / this.alunos.length;
    };


}