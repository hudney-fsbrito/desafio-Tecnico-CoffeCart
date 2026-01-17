// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("adicionaProdutoNoCarrinho", (...seletores) => {
  const precosArmazenados = [];

  seletores.forEach((seletor) => {
    cy.get(seletor)
      .parents("li")
      .within(() => {
        cy.get('h4').invoke('text').then((texto)=>{
            const linha = texto.split('\n');
            const nome = linha[0].trim()

            cy.get("small")
              .invoke("text")
              .then((preco) => {
                  precosArmazenados.push({
                    nome: nome,
                    preco: preco.trim()
                  });
  
                cy.get(seletor).click();
    
                  cy.wrap(precosArmazenados).as("precosSalvos");
              });
          });
        })

  });
});

Cypress.Commands.add("validarURL", (caminho)=>{
    cy.url().should("include", caminho);
})

Cypress.Commands.add("clicar", (elemento) => {
  cy.get(elemento).should("exist").click();
});

Cypress.Commands.add("validarVisivel", (seletr, valor)=>{
    cy.get(seletr, { timeout: valor }).should("be.visible");
})
