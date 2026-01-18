import {
  Given,
  When,
  And,
  Then,
  Before,
  After,
} from "cypress-cucumber-preprocessor/steps";
import Produtos from "../pages/produtos.page";
import Carrinho from "../pages/carrinho.page";
import Pagamento from "../pages/pagamento.page";

When("seleciona 3 tipos de cafes diferentes", () => {
  Produtos.selecionaProduto();
});

And("aceita a promocao de mais um por $4", () => {
  Produtos.aceitarPromocao();
});

And("clica na página de carrinho e valida os valores", () => {
  Carrinho.acessaPaginaCarrinho();
  Carrinho.validarPrecosCarrinho();  
});

And("remove um dos cafes do carrinho", () => {
  Carrinho.removerItemCarrinho();
});

And("quando efetua o pagamento", () => {
  Carrinho.acessaPaginaCarrinho();
  Carrinho.selecionaTotal();
  Pagamento.validarModalPagamento();
  Pagamento.preencherFromulario();
  Pagamento.efetuarPagamento();
});

Then("uma mensagem surge na tela", () => {
  Pagamento.validarPagamento();
});
