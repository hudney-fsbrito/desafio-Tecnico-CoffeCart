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



Cypress.Commands.add("extrairDados", (seletor) => {
  return cy
    .get(seletor)
    .parents("li")
    .within(() => {
      cy.get("h4")
        .invoke("text")
        .then((texto) => {
          const nome = texto.split("\n")[0].trim();

          cy.get("small")
            .invoke("text")
            .then((preco) => {
              cy.wrap({
                nome,
                preco: preco.trim(),
              });
            });
        });
    });
});

Cypress.Commands.add("adicionarProdutos", (seletor) => {
  cy.get(seletor).should("be.visible").click();
});

Cypress.Commands.add("salvarAlias", (alias, valor) => {
  cy.wrap(valor).as(alias);
});

Cypress.Commands.add("adicionaProdutoNoCarrinho", (...seletores) => {
  const precosArmazenados = [];

  seletores.forEach((seletor) => {
    cy.get(seletor)
      .parents("li")
      .within(() => {
        cy.get("h4")
          .invoke("text")
          .then((texto) => {
            const linha = texto.split("\n");
            const nome = linha[0].trim();

            cy.get("small")
              .invoke("text")
              .then((preco) => {
                precosArmazenados.push({
                  nome: nome,
                  preco: preco.trim(),
                });

                cy.adicionarProdutos(seletor);
                cy.salvarAlias("precosSalvos", precosArmazenados);
                
              });
          });
      });
  });
});


Cypress.Commands.add("validarURL", (caminho) => {
  cy.url().should("include", caminho);
});

Cypress.Commands.add("clicar", (elemento) => {
  cy.get(elemento, { timeout: 3000 }).should("exist").click();
});

Cypress.Commands.add("validarVisivel", (seletr, valor) => {
  cy.get(seletr, { timeout: valor }).should("be.visible");
});
