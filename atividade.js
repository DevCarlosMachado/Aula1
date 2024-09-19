const prompt = require('prompt-sync')();

// atividade 1
console.log("Atividade 1:");
var nome = "Carlos";
var idade = 20;

console.log("Olá meu nome é " + nome + " e tenho " + idade + " anos.")

// atividade 2
console.log("\nAtividade 2:")
var nome = "Alice";
var cidade = "Olinda";

console.log("Olá meu nome é " + nome + " e moro em " + cidade + ".");

// atividade 3 
console.log("\nAtividade 3:")
var num1 = 45;
var num2 = 5;
var soma, subtracao, multiplicacao, divisao;

//soma
soma = num1 + num2;
console.log("O valor da soma entre " + num1 + " e " + num2 + " é: " + soma + ".");
//subtração
subtracao = num1 - num2;
console.log("O valor da subtração entre " + num1 + " e " + num2 + " é: " + subtracao + ".");
//multiplicação
multiplicacao = num1 * num2;
console.log("O valor da multiplicação entre " + num1 + " e " + num2 + " é: " + multiplicacao + ".");
//divisão
divisao = num1 / num2;
console.log("O valor da divisão entre " + num1 + " e " + num2 + " é: " + divisao + ".");

//atividade 4
console.log("\nAtividade 4:"); 
var base = 10;
var altura = 5;
var areaTriangulo = base*altura/2;
console.log(`A área do triângulo é  ${areaTriangulo}`);

//atividade 5
console.log("\nAtividade 5:");
var nota1 = 8;
var nota2 = 5;
var nota3 = 6;
var media = ((nota1 + nota2 + nota3)/3).toFixed(2);
console.log(`O resultado da média é ${media}`);
var resultado = media > 7 ? 'aprovado' : 'reprovado';
console.log(`Você foi ${resultado}`);

//atividade 6
console.log("\nAtividade 6:");
var valorProduto = 1200;
var desconta = 0.1;
var valorDesconto = valorProduto - (0.1*1200);
console.log(`O valor do produto com desconto é de R$ ${valorDesconto}`);

//atividade 7
console.log("\nAtividade 7:");
