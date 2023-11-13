function calcular() {
    // Obtém o valor digitado pelo usuário
    const numeroDigitado = document.getElementById('numero').value;

    // Converte o valor para número
    const numero = parseFloat(numeroDigitado);

    // Verifica se o valor é um número válido
    if (!isNaN(numero)) {
        // Calcula o dobro do número
        const dobro = numero * 2;

        // Calcula os três próximos números
        const proximo1 = numero + 1;
        const proximo2 = numero + 2;
        const proximo3 = numero + 3;

        // Exibe o resultado na página
        document.getElementById('resultado').innerHTML = `
            O número digitado é ${numero}.<br>
            Seu dobro é ${dobro}.<br>
            Os três próximos números são ${proximo1}, ${proximo2} e ${proximo3}.
        `;
    } else {
        alert("Por favor, digite um número válido.");
    }
}