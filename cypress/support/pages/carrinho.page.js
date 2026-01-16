const CAFE_ESPRESSO = '[data-test="Espresso"]';
const CAFE_ESPRESSO_MACCHIATO = '[data-test="Espresso_Macchiato"]';
const CAFE_CAPPUCCINO = '[data-test="Cappuccino"]';
const CAMPO_PROMO = ".promo";
const CAMPO_YES = ".yes";

const LI_PRODUTO_CARRINHO = ".list-item";


const PRODUTOS = [
  "(Discounted) Mocha",
  "Espresso",
  "Cappuccino",
  "Espresso Macchiato",
];

class Carrinho {

  //   cy.get('li:has([data-test="Espresso"]) small')
  //   .should('contain.text', '$10.00')
  //   .click();
  validarProdutoNoCrrinho(){
    // cy.get(LI_PRODUTO_CARRINHO).contains(PRODUTOS[0])
    PRODUTOS.forEach((produto) => {
        cy.get(LI_PRODUTO_CARRINHO).should('contain.text', produto)
    })
  }
}

export default new Carrinho();
