const MODAL_PAGAMENTO = ".modal-content";
const NOME = "#name";
const EMAIL = "#email";
const BTN_SUBMIT = "#submit-payment";
const MENSAGEM_PAGAMETO = ".snackbar.success";

class Pagamento {

    validarModalPagamento(){
        cy.validarVisivel(MODAL_PAGAMENTO, 2000);
    }

    preencherFromulario(){
        cy.get(NOME).type(Cypress.env('nome'))
        cy.get(EMAIL).type(Cypress.env('email'))
    }

    efetuarPagamento(){
        cy.clicar(BTN_SUBMIT)
    }

    validarPagamento(){
        ;
        cy.validarVisivel(MENSAGEM_PAGAMETO, 2000).and(
          "contain.text",
          "Thanks for your purchase. Please check your email for payment.",
        );
    }

}

export default new Pagamento();
