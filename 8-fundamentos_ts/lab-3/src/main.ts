interface Produto {
    modelo: string;
    fabricante: string;
    valor: number;
    setModelo(modelo: string): void;
    getModelo(): string,
    setFabricante(fabricante: string): void;
    getFabricante(): string;
    setValor(valor: number): void;
    getValor(): number;
};

interface Tv extends Produto {
    resolucao: string;
    polegadas: number;
};

interface Celular extends Produto {
    memoria: number;
};

interface Bicicleta extends Produto {
    tamanhoAro: number;
};

class Tv implements Tv {
    public modelo: string;
    public resolucao: string;
    public polegadas: number;
    public fabricante: string;
    public valor: number;

    constructor(
        modelo: string,
        resolucao: string,
        polegadas: number,
        fabricante: string,
        valor: number
    ) {
        this.modelo = modelo;
        this.resolucao = resolucao;
        this.polegadas = polegadas;
        this.fabricante = fabricante;
        this.valor = valor;
    };

    public getFabricante(): string {
        return this.fabricante;
    };

    public setFabricante(fabricante: string): void {
        this.fabricante = fabricante;
    };

    public getModelo(): string {
        return this.modelo;
    };

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    };

    public getValor(): number {
        return this.valor;
    };

    public setValor(valor: number): void {
        this.valor = valor;
    };

};

class Celular implements Celular {
    public modelo: string;
    public memoria: number;
    public fabricante: string;
    public valor: number;
    constructor(
        modelo: string,
        memoria: number,
        fabricante: string,
        valor: number
    ) {
        this.modelo = modelo;
        this.memoria = memoria;
        this.fabricante = fabricante;
        this.valor = valor;
    }

    public getFabricante(): string {
        return this.fabricante;
    };

    public setFabricante(fabricante: string): void {
        this.fabricante = fabricante;
    };

    public getModelo(): string {
        return this.modelo;
    };

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    };

    public getValor(): number {
        return this.valor;
    };

    public setValor(valor: number): void {
        this.valor = valor;
    }
};

class Bicicleta implements Bicicleta {
    public modelo: string;
    public tamanhoAro: number;
    public fabricante: string;
    public valor: number;

    constructor(
        modelo: string,
        tamanhoAro: number,
        fabricante: string,
        valor: number
    ) {
        this.modelo = modelo;
        this.tamanhoAro = tamanhoAro;
        this.fabricante = fabricante;
        this.valor = valor;
    };

    public getFabricante(): string {
        return this.fabricante;
    };

    public setFabricante(fabricante: string): void {
        this.fabricante = fabricante;
    };

    public getModelo(): string {
        return this.modelo;
    };

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    };

    public getValor(): number {
        return this.valor;
    };

    public setValor(valor: number): void {
        this.valor = valor;
    };
};

class Carrinho<T extends Produto> {
    public produtos: T[] = [];

    public adicionarProd(produto: T): void {
        this.produtos.push(produto);
    };

    public removerProd(): void {
        if (this.produtos.length > 0) {
            this.produtos.pop();
        }
    };

    public calcularValorTotal(): number {
        return this.produtos.reduce((total, produto) => total + produto.getValor(), 0);
    };
};