function calcularPedido() {
    // Obtém a quantidade de pães e leite digitada pelo usuário
    const quantidadePao = document.getElementById('quantidadePao').valueAsNumber;
    const quantidadeLeite = document.getElementById('quantidadeLeite').valueAsNumber;

    // Calcula o valor total do pedido
    const precoPao = 0.20;
    const precoLeite = 5.50;

    const totalPao = quantidadePao * precoPao;
    const totalLeite = quantidadeLeite * precoLeite;

    const totalPedido = totalPao + totalLeite;

    // Exibe o resultado na página
    document.getElementById('resultado').innerHTML = `
        Pão ${quantidadePao} unidades<br>
        Leite ${quantidadeLeite} unidades<br>
        Total R$: ${totalPedido.toFixed(2)}
    `;
}