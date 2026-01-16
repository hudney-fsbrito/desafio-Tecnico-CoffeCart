import {
  Given,
  When,
  And,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";
import Portal from "../pages/portal.page";

Given("que o usuario acessa o site coffe cart", () => {
  cy.visit("/");
  Portal.validarAcesso()
});
