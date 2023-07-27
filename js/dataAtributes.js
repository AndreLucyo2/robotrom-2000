const lista = document.querySelector("ul");

document.querySelector("#botao").addEventListener("click", () => {
    lista.setAttribute("data-lista", "mostrar");
});

document.querySelector(".close").addEventListener("click", () => {
    lista.setAttribute("data-lista", "esconder");
});

/*
Explicação do código:

A variável lista, serve para referenciar a ul, 
utilizando o método querySelector.

A segunda linha de código cria um evento de clique, 
referenciando o botão, pelo id #botao. 
Essa mesma linha poderia ser escrita da 
seguinte forma: 
const botao = document.querySelector("#botao") 
botao.addEventListener("click", () =>

No método addEventListener, é passado o que deve acontecer 
com o clique, que é alterar algum atributo, com o método setAttribute, 
de "data-lista", para "mostrar".

Esses são os data attributes no arquivo CSS:

[data-lista="mostrar"] 
    { display: block; } 

[data-lista="esconder"] 
    { display: none; }

O segundo bloco de código realiza a mesma operação de alteração 
dos data-attributes, só que alterando dessa vez a partir do 
clique no botão com a classe .close
*/
