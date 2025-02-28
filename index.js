// 1) Cálculo da variável SOMA
function calcularSoma() {
    let INDICE = 13, SOMA = 0, K = 0;
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    return SOMA;
}
console.log("Valor da variável SOMA:", calcularSoma());

// 2) Verifica se um número pertence à sequência de Fibonacci
function pertenceFibonacci(num) {
    let a = 0, b = 1;
    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b === num || num === 0;
}

const numero = 21;
console.log(`O número ${numero} ${pertenceFibonacci(numero) ? "pertence" : "não pertence"} à sequência de Fibonacci.`);

// 3) Cálculo de faturamento diário
const faturamentoMensal = [100, 200, 0, 400, 500, 0, 300, 600, 0, 700]; // Exemplo de dados
function analisarFaturamento(faturamento) {
    const diasValidos = faturamento.filter(valor => valor > 0);
    const menor = Math.min(...diasValidos);
    const maior = Math.max(...diasValidos);
    const media = diasValidos.reduce((acc, val) => acc + val, 0) / diasValidos.length;
    const acimaDaMedia = diasValidos.filter(valor => valor > media).length;
    
    console.log("Menor faturamento:", menor);
    console.log("Maior faturamento:", maior);
    console.log("Dias acima da média:", acimaDaMedia);
}
analisarFaturamento(faturamentoMensal);

// 4) Cálculo do percentual de representação por estado
const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};
const total = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);
for (const estado in faturamentoEstados) {
    const percentual = (faturamentoEstados[estado] / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}

// 5) Inverter string sem usar funções prontas
function inverterString(str) {
    let invertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}
const palavra = "javascript";
console.log("String invertida:", inverterString(palavra));
