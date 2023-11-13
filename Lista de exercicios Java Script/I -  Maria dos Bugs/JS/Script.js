function calcularDesconto() {
    // Obtém o salário digitado pelo usuário
    const salario = document.getElementById('salario').valueAsNumber;

    // Verifica se o valor é um número válido
    if (!isNaN(salario)) {
        // Calcula o desconto de 15%
        const desconto = salario * 0.15;

        // Calcula o salário líquido
        const salarioLiquido = salario - desconto;

        // Exibe o resultado na página
        document.getElementById('resultado').innerHTML = `
            Salário Bruto R$: ${salario.toFixed(2)}<br>
            Desconto R$: ${desconto.toFixed(2)}<br>
            Salário Líquido R$: ${salarioLiquido.toFixed(2)}
        `;
    } else {
        alert("Por favor, digite um salário válido.");
    }
}