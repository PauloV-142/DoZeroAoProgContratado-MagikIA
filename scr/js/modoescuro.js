/*
  O que precisamos fazer? - Alterar entre os modos escuro e claro com um clique de um botão.
    OBJETIVO 1 - Criar uma função que altera entre vários objetos com cores predefinidas.
        passo 1 - pegar o botão que altera o modo
        passo 2 - criar objetos com as variáveis e respectivas cores
        passo 3 - criar uma função que modifica o css com base no objeto
*/
    //passo 1 - pegar o botão que altera o modo
    const botaoAlternarModo = document.querySelector('#alterna-modo');

    // passo 2 - criar objetos com as variáveis e respectivas cores
    const modoClaro = {
        '--destaque': '#6528D3',
        '--fundo': '#FFF',
        '--fundo-input': '#F2EEFA',
        '--fundo-cabecalho': '#0E0027',
        '--texto': '#130234'
    };

    const modoEscuro = {
        '--destaque': '#9a48f8',
        '--fundo': '#181a1b',
        '--fundo-input': '#131313',
        '--fundo-cabecalho': '#4C2296',
        '--texto': '#c9c3d3'
    };

    let Claro = true;

    function alterarModo(modo){
        for (let key in modo){
                document.documentElement.style.setProperty(key, modo[key]);
                // console.log('alterando...')
                // console.log(key, modo[key])
    }};

    botaoAlternarModo.onclick = function(){
        if (Claro){
            alterarModo(modoEscuro);
            botaoAlternarModo.style.setProperty('filter','brightness(70%)');
            botaoAlternarModo.style.setProperty('background-image', 'url(./scr/images/modo-claro.png)')
            Claro = false;
        } else {
            alterarModo(modoClaro);
            botaoAlternarModo.style.setProperty('filter','brightness(100%)');
            botaoAlternarModo.style.setProperty('background-image', 'url(./scr/images/modo-escuro.png)')
            Claro = true;
        };
    };