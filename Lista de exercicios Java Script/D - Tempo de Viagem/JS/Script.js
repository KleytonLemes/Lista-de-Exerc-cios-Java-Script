const form = document.querySelector('form');

const saidaTempo = document.getElementById('saidaTempo');
const saidaMinutos = document.getElementById('saidaMinutos');

form.onsubmit = (evento) => {
    const inputs = new FormData(evento.target);

    const numero1 = parseFloat(inputs.get('km'));
    const numero2 = parseFloat(inputs.get('kmh'));

    const tempoStimado = numero1 / numero2;

    //saidaTempo.textContent = ("O tempo estimado da viagem é de " + tempoStimado + " Minutos");
    
    saidaTempo.textContent = `O tempo estimado da viagem é de ${tempoStimado} Minutos`;


    return false;
}