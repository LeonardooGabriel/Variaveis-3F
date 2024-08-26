let idade = 18;
const anoNascimento = 2006;
let anoAtual = 2024;
const nomeCompleto = "Leonardo Gabriel Matias De OLiveira";

console.log("Meu nome é " + nomeCompleto + " nascido no ano de " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos");

anoAtual = anoAtual + 1;
idade = idade +1;

console.log(anoAtual);
console.log(idade);

//agência de viagens Dubai, New York, Maldivas, Madagascar, Chile

const listaDeDestinos = new Array(
  "Dubai",
  "New York",
  "Maldivas",
  "Madagascar",
  "Chile" 
 );

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel Vivida");
console.log(listaDeDestinos);
listaDeDestinos.push("Austrália");
listaDeDestinos.push("Alemanha");
listaDeDestinos.push("Amazonas");
console.log(listaDeDestinos);
