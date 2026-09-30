function somar(numeros) {
  let soma = 0;
  for (const valor of numeros) {
    soma += valor;
  }
  return soma;
}

async function executar(rl) {
  const qtd = Number(await rl.question("Quantos numeros voce vai somar? "));

  const numeros = [];
  for (let i = 0; i < qtd; i++) {
    const valor = Number(await rl.question(`Digite o numero ${i + 1}: `));
    numeros.push(valor);
  }

  console.log(`O somatorio dos numeros e: ${somar(numeros)}`);
}

module.exports = { somar, executar };
