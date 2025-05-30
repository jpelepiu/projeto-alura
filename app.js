function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${Orochi}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${Qual é a principal característica das letras do Orochi?}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${Orochi é conhecido por letras que misturam vivência, superação e crítica social.}</p>
    </div>
    </div>
    `
    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }

    cartao.addEventListener('click', viraCartao
    container.appendChild(cartao)

}