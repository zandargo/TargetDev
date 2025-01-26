// Definindo o faturamento mensal por estado
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calculando o valor total do faturamento
const total = Object.values(faturamento).reduce((acc, curr) => acc + curr, 0);

// Calculando e exibindo o percentual de representação de cada estado
for (const estado in faturamento) {
    const percentual = (faturamento[estado] / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
