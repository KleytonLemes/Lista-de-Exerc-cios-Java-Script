const form = document.querySelector('form');

const saida = document.getElementById('saida');

form.onsubmit = (evento) => {
    const inputs = new FormData(evento.target);

    var nome = inputs.get('nome');
    const idade = parseFloat(inputs.get('idade'));

    const idadeAproximada = new Date().getFullYear() - idade;
    
    saida.textContent = `Olá, ${nome}! Você tem aproximadamente ${idadeAproximada} anos.`;


    return false;
}