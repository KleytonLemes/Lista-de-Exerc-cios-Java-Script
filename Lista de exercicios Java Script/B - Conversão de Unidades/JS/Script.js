const form = document.querySelector('form');

const saidaKm = document.getElementById('saidaKm');
const saidaMilhas = document.getElementById('saidaMilhas');

form.onsubmit = (evento) => {
    const inputs = new FormData(evento.target);

    const km = parseFloat(inputs.get('km'));

    const milhas = km * 0.621371;

    saidaKm.textContent = 'Distância em quilômetros: ' + km;
    saidaMilhas.textContent = 'Distância em milhas:' + milhas;

    return false;
}