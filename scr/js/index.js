/*
  O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar as cartas baseado na categoria e no preço máximo selecionados
    OBJETIVO 1 - Criar a funcionalidade de filtrar as cartas
        passo 1 - pegar o botao de aplicar filtros  do HTML e mandar pro JS
        passo 2 - escutar o clique no botão de aplicar filtros
        passo 3 - pegar os valores dos campos de categoria e preço
        passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida 
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
    //passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida 
    const cartas = document.querySelectorAll('.carta'); //Cria uma lista

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
            carta.classList.remove('esconder');
        } else {
            carta.classList.add('esconder');
        };
    });
    //Pegar os elementos que mostram a seleção
    const displayCategoriaSelecionada = document.querySelector('#selecoes-categoria');
    console.log(displayCategoriaSelecionada);
    const displayPrecoSelecionado = document.querySelector('#selecoes-preco');
    console.log(displayPrecoSelecionado);
});