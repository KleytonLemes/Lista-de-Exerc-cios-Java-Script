const form = document.querySelector('form');

const saidaSoma = document.getElementById('saidaSoma');
const saidaSubtracao = document.getElementById('saidaSubtracao');
const saidaMultiplicacao = document.getElementById('saidaMultiplicacao');
const saidaDivisao = document.getElementById('saidaDivisao');


form.onsubmit = (evento) => {
    const inputs = new FormData(evento.target);

    const numero1 = parseFloat(inputs.get('numero1'));
    const numero2 = parseFloat(inputs.get('numero2'));

    // Realizar os cálculos
    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;
    let divisao = numero1 / numero2;

    saidaSoma.textContent = numero1 + ' + ' + numero2 + ' = ' + soma;
    saidaMultiplicacao.textContent = numero1 + " - " + numero2 + " = " + subtracao;
    saidaMultiplicacao.textContent = numero1 + " x " + numero2 + " = " + multiplicacao;
    saidaDivisao.textContent = numero1 + " ÷ " + numero2 + " = " + divisao;

        // Verificar se os valores são válidos
        if (isNaN(numero1) || isNaN(numero2)) {
            alert("Por favor, insira números válidos.");
            return;
        }
    
        if (numero2 === 0) {
            alert("Não é possível dividir por zero.");
        } else {
            saidaDivisao.textContent = numero1 + " ÷ " + numero2 + " = " + infinito;
        }

    return false;
}

    
    
let bt_validar = document.getElementById('validar');

 bt_validar.addEventListener('click', function() {
    var cont_escondido = document.getElementById('escondido')

    cont_escondido.classList.toggle('escondido')

 });