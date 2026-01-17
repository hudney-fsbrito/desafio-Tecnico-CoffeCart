const CAFE_ESPRESSO = '[data-test="Espresso"]';
const CAFE_ESPRESSO_MACCHIATO = '[data-test="Espresso_Macchiato"]';
const CAFE_CAPPUCCINO = '[data-test="Cappuccino"]';
const CAMPO_PROMO = ".promo";
const CAMPO_YES = ".yes";

class Produtos {
  selecionaProduto() {
    cy.adicionaProdutoNoCarrinho(
      CAFE_ESPRESSO,
      CAFE_ESPRESSO_MACCHIATO,
      CAFE_CAPPUCCINO,
    );
  }

  validaPrecoProduto() {
        cy.get('li:has([data-test="Espresso"]) small')
        .should('contain.text', '$10.00');
  }
  aceitarPromocao() {
    cy.validarVisivel(CAMPO_PROMO, 2000 )
    cy.clicar(CAMPO_YES);
  }
}

export default new Produtos();
