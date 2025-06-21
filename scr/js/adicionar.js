/*
    OBJETIVO - Fazer os dados da carta aparecerem assim que forem inseridos
*/

// const inputs = document.querySelectorAll("input");
// console.log(inputs); maybe for later use...

const templates = {
    'input-nome': '',
    'input-categoria': 'Categoria: ',
    'input-preco': 'R$ '
};

function atualizar(input, texto){
    document.getElementById(texto).textContent = templates[input] + document.getElementById(input).value;
};

function atualizarImagem(){
    arquivo = document.getElementById('input-imagem').files[0];
    tag = document.getElementById('carta-imagem');
    if (arquivo){
        tag.src = URL.createObjectURL(arquivo);
    }
    console.log(tag.src);
};