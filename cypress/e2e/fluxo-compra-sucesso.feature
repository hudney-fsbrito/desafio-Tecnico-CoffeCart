#utf-8
#language: pt


Funcionalidade: Efetuar o processo de compra
	Cenario: Efetuar o processo de compra com sucesso
		Dado que o usuario acessa o site coffe cart
		Quando seleciona 3 tipos de cafes diferentes
        E aceita a promocao de mais um por $4
		E clica na página de carrinho e valida os valores
        E remove um dos cafes do carrinho
		E quando efetua o pagamento
		Entao uma mensagem surge na tela