

function primeiroNome(nomeCompleto) {
  const espacoEmBranco = nomeCompleto.lastIndexOf(" ");

  if (espacoEmBranco === -1) return nomeCompleto;
  else return nomeCompleto.splice(0, espacoEmBranco);
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
  if (estoqueDisponivel === 0) return false;
  else return true;
}

function calcularPrecoTotal(produtos) {
  let total = 0;
  for (let i = 0; i < produtos.length; i++) {
    total = produtos[i].price;
  }

  return total;
}

module.exports = {
  primeiroNome,
  verificarDisponibilidadeEstoque,
  calcularPrecoTotal,
}