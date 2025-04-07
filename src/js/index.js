const botoes = document.querySelectorAll('.botao');  // passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
const personagens = document.querySelectorAll('.personagem');  // passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele

botoes.forEach((botao, indice)=>{
    botao.addEventListener("click", () => {     

        const botaoSelecionado = document.querySelector(".botao.selecionado"); // passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        console.log(botaoSelecionado);
        botaoSelecionado.classList.remove("selecionado"); // passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
        botao.classList.add("selecionado");

		const personagemSelecionado = document.querySelector(".personagem.selecionado"); // passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
		personagemSelecionado.classList.remove("selecionado"); // passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
		personagens[indice].classList.add("selecionado");
    });
});








