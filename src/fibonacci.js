function gerar(quantidade) {
  const termos = [];

  for (let i = 0; i < quantidade; i++) {
    if (i === 0) {
      termos.push(0);
    } else if (i === 1) {
      termos.push(1);
    } else {

      termos.push(termos[i - 1] + termos[i - 2]);
    }
  }
  return termos;
}

async function executar(rl) {
  const n = Number(await rl.question("Quantos termos de Fibonacci deseja gerar? "));

  if (n <= 0) {
    console.log("Informe um valor maior que zero.");
    return;
  }

  const termos = gerar(n);

  console.log("Sequencia de Fibonacci: " + termos.join(", "));
}

module.exports = { gerar, executar };
