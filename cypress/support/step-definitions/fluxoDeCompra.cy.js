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

And("seleciona 3 tipos de cafes diferentes", () => {
  Produtos.selecionaProduto();
});

And("aceita a promocao de mais um por $4", () => {
  Produtos.aceitarPromocao();
});

And("clica na página de carrinho e valida os valores", () => {
  Carrinho.acessaPaginaCarrinho();
  Carrinho.validarPrecoDoProduto();  
});

And("remove um dos cafes do carrinho", () => {
    Carrinho.removerItemCarrinho();

});
