#utf-8
#language: pt


Funcionalidade: Efetuar o processo de compra
	Cenario: Efetuar o processo de compra com sucesso
		Dado que o usuario acessa o site coffe cart
		E seleciona 3 tipos de cafes diferentes
        E aceita a promocao de mais um por $4
		E clica na página de carrinho e valida os valores
        E remove um dos cafes do carrinho
		Quando quando efetua o pagamento
		Entao uma mensagem surge na tela


# Cenário de Teste:
# • Acesso: Navegar até 
# https://coffee-cart.app/.
# • Seleção: Escolher 3 tipos de cafés diferentes.
# • Promoção: Validar a aparição do modal de oferta (Mocha por $4) e aceitar a oferta.
# • Carrinho: Validar que os 4 itens (3 iniciais + 1 brinde/oferta) estão presentes com os valores 
# corretos.
# • Edição: Remover 1 item do carrinho.
# • Checkout:Realizar o pagamento e validar a mensagem de sucesso final.