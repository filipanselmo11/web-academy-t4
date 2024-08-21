console.log('Bem vindo ao desafio de JokenPô\n');
console.log('Escolha alguma opção:')
console.log('1 - Pedra');
console.log('2 - Papel');
console.log('3 - Tesoura');

const opcoes = ['Pedra', 'Papel', 'Tesoura'];

let opcaoJogador;
let opcaoMaquina;

const lerEntradas = () => {
    opcaoJogador = parseInt(prompt());
    opcaoMaquina = Math.floor(Math.random() * 3) + 1;
    if (opcaoJogador >= 1 && opcaoJogador <= 3) {
        console.log('Você escolheu: ', opcoes[opcaoJogador - 1]);
        console.log('A máquina escolheu: ', opcoes[opcaoMaquina - 1]);
    }
}

const execucao = () => {
    for (let index = 0; index < 3; index++) {
        lerEntradas();
        if (opcaoJogador === opcaoMaquina) {
            console.log('Empate. Joguem de novo');
            lerEntradas();
        } else if (opcaoJogador !== opcaoMaquina) {
            if (opcaoJogador === 1 && opcaoMaquina === 2) {
                console.log('Máquina ganhou');
            } else if (opcaoJogador === 2 && opcaoMaquina === 1) {
                console.log('Jogador ganhou');
            } else if (opcaoJogador === 1 && opcaoMaquina === 3) {
                console.log('Jogador ganhou');
            } else if (opcaoJogador === 3 && opcaoMaquina === 1) {
                console.log('Máquina ganhou');
            } else if (opcaoJogador === 2 && opcaoMaquina === 3) {
                console.log('Máquina ganhou');
            } else if (opcaoJogador === 3 && opcaoMaquina === 2) {
                console.log('Jogador ganhou');
            }
        }

        console.log('Fim da rodada ', index);
    }
}

execucao();