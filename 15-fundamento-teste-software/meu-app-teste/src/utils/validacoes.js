

function primeiroNome(nomeCompleto) {
  const nomeSemEspaco = nomeCompleto.trim();
  const palavras = nomeSemEspaco.split(" ");
  return palavras[0];
}

function verificarDisponibilidadeEstoque(tipoProduto, quantidade) {
  const estoque = {
    laptop: 10,
    smartphone: 20,
    headphone: 5,
    tablet: 15,
    livro: 0,
  };

  const estoqueDisponivel = estoque[tipoProduto];
  if (estoqueDisponivel !== undefined) {
    return estoqueDisponivel >= quantidade;
  }
  return false;
}

function calcularPrecoTotal(produtos) {
  let total = 0;
  for (let i = 0; i < produtos.length; i++) {
    total += produtos[i].price;
  }

  return total;
}

module.exports = {
  primeiroNome,
  verificarDisponibilidadeEstoque,
  calcularPrecoTotal,
}