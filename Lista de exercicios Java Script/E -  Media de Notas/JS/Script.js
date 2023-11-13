const form = document.querySelector('form');

const saidaMedia = document.getElementById('saidaMedia');

form.onsubmit = (evento) => {
    const inputs = new FormData(evento.target);

    const nota1 = parseFloat(inputs.get('nota1'));
    const nota2 = parseFloat(inputs.get('nota2'));
    const nota3 = parseFloat(inputs.get('nota3'));

    let media = (nota1 + nota2 + nota3) / 3;
    media.toFixed(2)
    
    saidaMedia.textContent = `A média é ${media} `;


    return false;
}