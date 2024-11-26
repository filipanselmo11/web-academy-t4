const { primeiroNome, verificarDisponibilidadeEstoque, calcularPrecoTotal } = require("../utils/validacoes");

describe("validacoes.js", () => {
  describe("primeiroNome()", () => {
    test("deve retornar o primeiro nome quando o nome completo é fornecido", () => {
      const fullName = "Fílip Anselmo Alves da Silva";
      const res = primeiroNome(fullName);
      expect(res).toBe("Fílip");
    });
    test("deve retornar o mesmo nome quando não há espaço em branco", () => {
      const name = "Fílip";
      const res = primeiroNome(name);
      expect(res).toBe("Fílip");
    });
    test("deve retornar o primeiro nome corretamente quando há espaço em branco no inicio.", () => {
      const fullName = " Fílip Anselmo Alves da Silva";
      const res = primeiroNome(fullName);
      expect(res).toBe("Fílip");
    });
    test("deve retornar o primeiro nome corretamente quando há espaço em branco no final", () => {
      const fullName = "Fílip Anselmo Alves da Silva ";
      const res = primeiroNome(fullName);
      expect(res).toBe("Fílip");
    });
  });
  describe("verificarDisponibilidadeEstoque()", () => {
    test("deve retornar se o produto está disponível", () => {
      const res = verificarDisponibilidadeEstoque("livro", 2);
      expect(res).toBe(false);
    });
    test("deve retornar verdadeiro se a quantidade que foi solicitada está disponível", () => {
      const res = verificarDisponibilidadeEstoque("laptop", 5);
      expect(res).toBe(true);
    });
    test("deve retornar falso se o produto não estiver disponível no estoque", () => {
      const res = verificarDisponibilidadeEstoque("camera", 1);
      expect(res).toBe(false);
    });
  });
  describe("calcularPrecoTotal()", () => {
    test("deve retornar o preco total dos produtos", () => {
      const produtos = [
        { name: "PS5 Pró", price: 7000},
        { name: "Linkin Park From 0", price: 15},
        { name: "Bike", price: 1800},
      ];
      const res = calcularPrecoTotal(produtos);
      expect(res).toBe(8815);
    });
    test("deve retornar 0 para lista de produtos vazia", () => {
      const produtos = [];
      const res = calcularPrecoTotal(produtos);
      expect(res).toBe(0);
    });
    test("deve retornar o preco do unico produto na lista", () => {
      const produtos = [{ name: "PS5", price: 7000 }];
      const res = calcularPrecoTotal(produtos);
      expect(res).toBe(7000);
    });
  });
});
