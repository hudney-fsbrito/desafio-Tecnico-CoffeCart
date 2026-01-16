class Portal {
    validarAcesso(){
        cy.url().should("include", Cypress.config('baseUrl'))
    }
}

export default new Portal()