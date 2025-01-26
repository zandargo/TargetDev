// String a ser invertida
const str = "uma string qualquer!";

// Função para inverter a string
function inverterString(s) {
    let invertida = "";
    for (let i = s.length - 1; i >= 0; i--) {
        invertida += s[i];
    }
    return invertida;
}

// Exibindo a string invertida
console.log(inverterString(str));
