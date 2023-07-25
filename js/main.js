const roboTron = document.querySelector("#roboTron");

const somar = document.querySelector("#somar");
const subtrair = document.querySelector("#subtrair");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach((elelento) => {
    elelento.addEventListener('click', (evento) => {
        console.log(evento.target.textContent)
        
    })
})



somar.addEventListener("click", () => {
    manipulaDados('somar');
})

subtrair.addEventListener("click", () => {
    manipulaDados('subtrair');
})

//Definição do escopo dentralizado:
function manipulaDados(operacao) {
    if (operacao === 'somar') {
        braco.value = parseInt(braco.value) + 1;

    } else {
        braco.value = parseInt(braco.value) - 1;

    }
}