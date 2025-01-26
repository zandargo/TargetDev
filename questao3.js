const fs = require('fs');

// Carregar os dados de dados.json
const data = JSON.parse(fs.readFileSync('dados.json', 'utf8'));

// Filtrar os dias com faturamento maior que zero
const validDays = data.filter(day => day.valor > 0);

// Calcular o menor e o maior faturamento
const minRevenue = Math.min(...validDays.map(day => day.valor));
const maxRevenue = Math.max(...validDays.map(day => day.valor));

// Calcular a média mensal de faturamento
const totalRevenue = validDays.reduce((sum, day) => sum + day.valor, 0);
const averageRevenue = totalRevenue / validDays.length;

// Calcular o número de dias com faturamento acima da média
const daysAboveAverage = validDays.filter(day => day.valor > averageRevenue).length;

// Exibir os resultados
console.log(`Menor valor de faturamento: ${minRevenue}`);
console.log(`Maior valor de faturamento: ${maxRevenue}`);
console.log(`Número de dias com faturamento acima da média: ${daysAboveAverage}`);
