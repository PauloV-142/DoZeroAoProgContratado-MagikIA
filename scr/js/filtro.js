/*
  O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar as cartas baseado na categoria e no preço máximo selecionados
    OBJETIVO 1 - Criar a funcionalidade de filtrar as cartas
        passo 1 - pegar o botao de aplicar filtros  do HTML e mandar pro JS
        passo 2 - escutar o clique no botão de aplicar filtros
        passo 3 - pegar os valores dos campos de categoria e preço
        passo 4 - modificar os parágrafos de classe seleções para mostrar a categoria e preço
        passo 5 - para cada carta, verificar se ela deve ser mostrada ou escondida
        passo 6 - mostrar o número de cartas selecionadas
*/

//passo 1 - pegar o botao de aplicar filtros  do HTML e mandar pro JS*/
const botaoFiltrar = document.querySelector('.btn-filtrar');

//passo 2 - escutar o clique no botão de aplicar filtros
botaoFiltrar.addEventListener('click', function(){
    //passo 3 - pegar os valores dos campos de categoria e preço
    const categoriaSelecionada = document.querySelector('#categoria').value;
    const precoMaximoSelecionado = document.querySelector('#preco').value;
    const temFiltroCategoria = categoriaSelecionada !== '';
    const temFiltroPreco = precoMaximoSelecionado !== '';

    //passo 4 - modificar os parágrafos de classe seleções para mostrar a categoria e preço
    document.getElementById('selecoes-categoria').innerHTML = `Categoria: <font id="selecoes-texto">${categoriaSelecionada !== "" ? categoriaSelecionada : "Todas"}</font>`;
    document.getElementById('selecoes-preco').innerHTML = `Preço máximo: <font id="selecoes-texto">${precoMaximoSelecionado !== "" ? "R$"+precoMaximoSelecionado : "\u221E"}</font>`;

    //passo 5 - para cada carta, verificar se ela deve ser mostrada ou escondida 
    const cartas = document.querySelectorAll('.carta'); //Cria uma lista
    let numeroDeCartasSelecionadas = 0;

    cartas.forEach(function(carta){
        const categoriaCarta = carta.dataset.categoria;
        const precoCarta = carta.dataset.preco;
        let mostrarCarta = true;
        //Categoria
        const cartaNaoBateComFiltroDeCategoria = categoriaSelecionada !== categoriaCarta;

        if(temFiltroCategoria && cartaNaoBateComFiltroDeCategoria){
            mostrarCarta = false;
        };

        //Preço
        const precoCartaAcimaDoPrecoMaximo = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado);

        if(temFiltroPreco && precoCartaAcimaDoPrecoMaximo){
            mostrarCarta = false;
        };

        //Mostrar ou Esconder
        if(mostrarCarta){
            numeroDeCartasSelecionadas += 1;
            carta.classList.remove('esconder');
        } else {
            carta.classList.add('esconder');
        }
    });
    
    //passo 6 - mostrar o número de cartas selecionadas
    document.querySelector('#selecoes-cartas').innerHTML = `Cartas: <font id="selecoes-texto">${numeroDeCartasSelecionadas}</font>`;//Alternativa ao getElementByID()
});