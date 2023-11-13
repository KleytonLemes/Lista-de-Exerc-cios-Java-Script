function calcularPagamento() {
    // Obtém a quantidade de milheiros digitada pelo usuário
    const milheiros = document.getElementById('milheiros').valueAsNumber;

    // Verifica se o valor é um número válido
    if (!isNaN(milheiros)) {
        // Calcula o total bruto a pagar
        const valorPorMilheiro = 169.90;
        const totalBruto = milheiros * valorPorMilheiro;

        // Calcula o desconto de 9% de imposto
        const descontoImposto = totalBruto * 0.09;

        // Calcula o total líquido
        const totalLiquido = totalBruto - descontoImposto;

        // Exibe o resultado na página
        document.getElementById('resultado').innerHTML = `
            Milheiro(s) ${milheiros}<br>
            Total a pagar R$: ${totalBruto.toFixed(2)}<br>
            Imposto R$: ${descontoImposto.toFixed(2)}<br>
            Total líquido R$: ${totalLiquido.toFixed(2)}
        `;
    } else {
        alert("Por favor, digite uma quantidade válida de milheiros.");
    }
}
