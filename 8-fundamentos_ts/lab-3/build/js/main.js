"use strict";
;
;
;
;
class Tv {
    constructor(modelo, resolucao, polegadas, fabricante, valor) {
        this.modelo = modelo;
        this.resolucao = resolucao;
        this.polegadas = polegadas;
        this.fabricante = fabricante;
        this.valor = valor;
    }
    ;
    getFabricante() {
        return this.fabricante;
    }
    ;
    setFabricante(fabricante) {
        this.fabricante = fabricante;
    }
    ;
    getModelo() {
        return this.modelo;
    }
    ;
    setModelo(modelo) {
        this.modelo = modelo;
    }
    ;
    getValor() {
        return this.valor;
    }
    ;
    setValor(valor) {
        this.valor = valor;
    }
    ;
}
;
class Celular {
    constructor(modelo, memoria, fabricante, valor) {
        this.modelo = modelo;
        this.memoria = memoria;
        this.fabricante = fabricante;
        this.valor = valor;
    }
    getFabricante() {
        return this.fabricante;
    }
    ;
    setFabricante(fabricante) {
        this.fabricante = fabricante;
    }
    ;
    getModelo() {
        return this.modelo;
    }
    ;
    setModelo(modelo) {
        this.modelo = modelo;
    }
    ;
    getValor() {
        return this.valor;
    }
    ;
    setValor(valor) {
        this.valor = valor;
    }
}
;
class Bicicleta {
    constructor(modelo, tamanhoAro, fabricante, valor) {
        this.modelo = modelo;
        this.tamanhoAro = tamanhoAro;
        this.fabricante = fabricante;
        this.valor = valor;
    }
    ;
    getFabricante() {
        return this.fabricante;
    }
    ;
    setFabricante(fabricante) {
        this.fabricante = fabricante;
    }
    ;
    getModelo() {
        return this.modelo;
    }
    ;
    setModelo(modelo) {
        this.modelo = modelo;
    }
    ;
    getValor() {
        return this.valor;
    }
    ;
    setValor(valor) {
        this.valor = valor;
    }
    ;
}
;
class Carrinho {
    constructor() {
        this.produtos = [];
    }
    adicionarProd(produto) {
        this.produtos.push(produto);
        this.atualizarCarrinho();
    }
    ;
    calcularValorTotal() {
        return this.produtos.reduce((total, produto) => total + produto.getValor(), 0);
    }
    ;
    atualizarCarrinho() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const totalValue = document.getElementById('total-value');
        const cartEmpty = document.getElementById('cart-empty');

        cartItems.innerHTML = '';

        if (this.produtos.length === 0) {
            cartEmpty.style.display = 'block';
            cartTotal.style.display = 'none';
        } else {
            cartEmpty.style.display = 'none';
            cartTotal.style.display = 'block';

            this.produtos.forEach((produto) => {
                const li = document.createElement('li');
                li.className = 'h6';
                li.innerHTML = `${produto.getModelo()} - R$ ${produto.getValor().toFixed(2)}`;
                cartItems.appendChild(li);
            });

            totalValue.innerText = this.calcularValorTotal().toFixed(2);
        }
    }
    ;
    removerProd() {
        if (this.produtos.length > 0) {
            this.produtos.pop();
            this.atualizarCarrinho();
        }
    }
    ;
}
;



const formProd = document.getElementById('formProd');

const tipoProdSelect = document.getElementById('tipoProd');

const extraFieldsDiv = document.getElementById('extraFields');

tipoProdSelect.addEventListener('change', () => {
    const tipoProd = tipoProdSelect.value;
    extraFieldsDiv.innerHTML = '';

    if (tipoProd === 'Tv') {
        extraFieldsDiv.innerHTML = `
            <div class="mb-3">
                <label for="polegadas" class="col-form-label">
                    Tamanho (polegadas):
                </label>
                <input type="number" class="form-control" id="polegadas" name="polegadas">
            </div>
        `;
    } else if (tipoProd === 'Celular') {
        extraFieldsDiv.innerHTML = `
            <div class="mb-3">
                <label for="memoria" class="col-form-label">Armazenamento (GB):</label>
                <input type="number" class="form-control" id="memoria" name="memoria" required>
            </div>
        `;
    } else if (tipoProd === 'Bicicleta') {
        extraFieldsDiv.innerHTML = `
            <div class="mb-3">
                <label for="tamanhoAro" class="col-form-label">Aro:</label>
                <input type="number" class="form-control" id="tamanhoAro" name="tamanhoAro" required>
            </div>
        `;
    }
});

formProd.addEventListener('submit', (event) => {
    event.preventDefault();

    const tipoProd = tipoProdSelect.value;
    const modelo = document.getElementById('modelo').value;
    const fabricante = document.getElementById('fabricante').value;
    const valor = parseFloat(document.getElementById('valor').value);

    let novoProd;

    if (tipoProd === 'Tv') {
        const polegadas = parseFloat(document.getElementById('polegadas').value);
        novoProd = new Tv(modelo, fabricante, polegadas, fabricante, valor);
    } else if (tipoProd === 'Celular') {
        const memoria = parseFloat(document.getElementById('memoria').value);
        novoProd = new Celular(modelo, memoria, fabricante, valor);
    } else if (tipoProd === 'Bicicleta') {
        const tamanhoAro = parseFloat(document.getElementById('tamanhoAro').value);
        novoProd = new Bicicleta(modelo, tamanhoAro, fabricante, valor);
    }

    carrinho.adicionarProd(novoProd);

    const modal = bootstrap.Modal.getInstance(document.getElementById('prodModal'));
    modal.hide();

    formProd.reset();
    extraFieldsDiv.innerHTML = '';
});

const removerItem = document.getElementById('remove-item');
removerItem.addEventListener('click', () => {
    carrinho.removerProd();
});

const carrinho = new Carrinho();

// const tv = new Tv('LG 0LED', '4k', '55', 'LG', 5000);
// const celular = new Celular('Iphone 13', 128, 'Apple', 7000);
// const bicicleta = new Bicicleta('Caloi', 29, 'Caloi', 1500);

// carrinho.adicionarProd(tv);
// carrinho.adicionarProd(celular);
// carrinho.adicionarProd(bicicleta);
