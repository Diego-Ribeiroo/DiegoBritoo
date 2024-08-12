const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes")

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desativarBotaoSelecionado();

        ativarBotaoSelecionado(botao);

        esconderImagemDeFundo();

        mostrarImagemDeFundo(indice);

        esconderInformacoes();

        mostrarInformacoes(indice);


    });
});

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

function ativarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoes() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemDeFundo() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

// Variável para controlar o índice atual da imagem
let indiceAtual = 0;


function atualizarIndice(indice) {

    retirarClasseAtiva();

    adicionarClasseAtiva(indice);

    retirarSelecionado();

    adicionarSelecionado(indice);

    // Atualizar o índice atual
    indiceAtual = indice;
}

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        atualizarIndice(indice);
    });
});

// Adiciona a ação para as teclas do teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        // Avançar para a próxima imagem
        const proximoIndice = (indiceAtual + 1) % imagens.length;
        atualizarIndice(proximoIndice);
    } else if (event.key === 'ArrowLeft') {
        // Voltar para a imagem anterior
        const indiceAnterior = (indiceAtual - 1 + imagens.length) % imagens.length;
        atualizarIndice(indiceAnterior);
    }
});


function adicionarSelecionado(indice) {
    botoesCarrossel[indice].classList.add("selecionado");
}

function retirarSelecionado() {
    botoesCarrossel[indiceAtual].classList.remove("selecionado");
}

function adicionarClasseAtiva(indice) {
    imagens[indice].classList.add("ativa");
    informacoes[indice].classList.add("ativa");
}

function retirarClasseAtiva() {
    imagens[indiceAtual].classList.remove("ativa");
    informacoes[indiceAtual].classList.remove("ativa");
}

