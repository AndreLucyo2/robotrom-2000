const roboTron = document.querySelector("#roboTron");

const somar = document.querySelector("#somar");
const subtrair = document.querySelector("#subtrair");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach((elelento) => {
    elelento.addEventListener('click', (evento) => {

        manipulaDados(evento.target.textContent, evento.target.parentNode);

        console.log(evento.target.textContent);
        console.log(evento.target.parentNode);

    })
})

//Definição do escopo centralizado:
function manipulaDados(operacao, controle) {

    //a partir do pai, obtem apenas o que quer alterar:
    const peca = controle.querySelector(".controle-contador")

    if (operacao === '+') {
        peca.value = parseInt(peca.value) + 1;

    } else {
        peca.value = parseInt(peca.value) - 1;

    }
}