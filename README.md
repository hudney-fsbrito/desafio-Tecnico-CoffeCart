# Coffee Cart Test Automation
Projeto de automação de testes end-to-end para a aplicação Coffee Cart utilizando **Cypress** com **BDD (Cucumber)** e **Page Object Model (POM)**.

Este projeto foi criado como um desafio técnico para demonstrar boas práticas em automação de testes, organização de código e uso de frameworks modernos.

## Pré-requisitos
* **Node.js** v20.11.0
* **Cypress:** package version: 15.8.0 / binary version: 15.8.0
* **BDD (Cucumber / Gherkin)**
* **Mochawesome**
* **Faker** para dados dinâmicos
* **npm**

## Estrutura do Projeto

```bash
 cypress/
    e2e/
    pages/
    fixtures/
    support/
    plugins/
 cypress.config.js
 package.json
 README.md
```


## Instalação

```bash
git clone https://github.com/hudney-fsbrito/desafio-Tecnico-CoffeCart.git

cd desafio-Tecnico-CoffeCart

npm install
```


## Execução dos testes

#### Modo interativo
```bash
npx cypress open
```
#### Modo headless (terminal)
```bash
npx cypress run
```

## Boas Práticas

- Page Object Model
- BDD com Gherkin
- Dados dinâmicos
- Estrutura escalável
- Código limpo e reutilizável

---


## Autor

**Hudney Fernandes dos Santos Brito**    

- 🔗 GitHub: https://github.com/hudney-fsbrito  
- 🔗 LinkedIn: https://linkedin.com/in/hudneyfernandes-dev  




## Fontes de Informação e Documentação

Abaixo estão as principais referências utilizadas e recomendadas para estudo e aprofundamento:

https://www.youtube.com/watch?v=Tkb1H4Cemak&t=10s
https://www.youtube.com/watch?v=scSW_1WB5P8&t=1319s

* Cypress

https://docs.cypress.io

https://docs.cypress.io/guides/references/best-practices

https://docs.cypress.io/api/table-of-contents

* BDD / Gherkin

https://cucumber.io/docs/bdd/

https://cucumber.io/docs/gherkin/reference/

* Cucumber

https://cucumber.io/docs/cucumber/

https://github.com/badeball/cypress-cucumber-preprocessor

* Faker.js

https://fakerjs.dev/

https://fakerjs.dev/guide/

* Mochawesome

https://github.com/adamgruber/mochawesome

https://www.npmjs.com/package/cypress-mochawesome-reporter