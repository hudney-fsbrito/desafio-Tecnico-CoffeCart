class Portal {
    validarAcesso(){
        cy.validarURL(Cypress.config("baseUrl"));
    }
}

export default new Portal()