const BTN_CARRINHO = '[aria-label="Cart page"]';
const TITILO_LISTA = ".list-header";
const LI_PRODUTO_CARRINHO = ".list-item";
const PRECO_PRODUTO_CARRINHO = "ul:not(.cart-preview) .unit-desc";
const PRODUTO_CARRINHO = "ul:not(.cart-preview) .list-item";
const BTN_ECLUIR_ITEM = ".delete";
const BTN_TOTAL = '[data-test="checkout"]';

const PRODUTOS = [
  "(Discounted) Mocha",
  "Espresso",
  "Cappuccino",
  "Espresso Macchiato",
];

class Carrinho {
  acessaPaginaCarrinho() {
    cy.clicar(BTN_CARRINHO);
    cy.validarURL(Cypress.config("urlCart"));
    cy.get(TITILO_LISTA, { timeout: 10000 }).should("exist").and("be.visible");
  }

  validarProdutoNoCrrinho() {
    PRODUTOS.forEach((produto) => {
      cy.get(LI_PRODUTO_CARRINHO).should("contain.text", produto);
    });
    cy.screenshot("Produtos no carrinho");
  }

  extrairPrecosEsperados(produtos){
    return produtos.map((p)=>p.preco)
  }

  extrairPrecosDoCarrinho($spans){
    return [...$spans].map((span)=>
      span.textContent.split(" x ")[0].trim(),
    )
  }

  validarQuantidadeItens(precosCarrinho, precosEsperados){
    expect(precosCarrinho.length).to.deep.equal(precosEsperados.length + 1);
  }

  validarPrecosPresentes(precosCarrinho, precosEsperados){
     precosEsperados.forEach((preco) => {
       expect(precosCarrinho).to.include(preco);
     });
  }
  validarPrecosCarrinho() {
    cy.get("@precosSalvos").then((produtos) => {
      const precosEsperados = this.extrairPrecosEsperados(produtos);

      cy.get(PRECO_PRODUTO_CARRINHO).then(($spans) => {
        const precosCarrinho = this.extrairPrecosDoCarrinho($spans)

        this.validarQuantidadeItens(precosCarrinho, precosEsperados)
        this.validarPrecosPresentes(precosCarrinho, precosEsperados)
      });
    });
  }

  removerItemCarrinho() {
    cy.get(PRODUTO_CARRINHO).then(($itens) => {
      const itensAntes = $itens.length;

      cy.get(BTN_ECLUIR_ITEM).last().click();

      cy.get(PRODUTO_CARRINHO).should("have.length", itensAntes - 1);
    });
    cy.screenshot("Produto removido do carrinho");
  }

  selecionaTotal() {
    cy.clicar(BTN_TOTAL);
  }
}

export default new Carrinho();
