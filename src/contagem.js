function contarNoIntervalo(valores, limInf, limSup) {
  let contador = 0;
  for (const valor of valores) {
    if (valor >= limInf && valor <= limSup) {
      contador++;
    }
  }
  return contador;
}

async function executar(rl) {
  const n = Number(await rl.question("Quantos numeros (N) voce vai informar? "));

  if (n <= 0) {
    console.log("Informe um valor maior que zero.");
    return;
  }

  const valores = [];
  for (let i = 0; i < n; i++) {
    valores.push(Number(await rl.question(`Digite o numero ${i + 1}: `)));
  }

  const primeiro = valores[0];

  const limiteInferior = Math.min(primeiro, n);
  const limiteSuperior = Math.max(primeiro, n);

  const quantidade = contarNoIntervalo(valores, limiteInferior, limiteSuperior);

  console.log(`Intervalo considerado: [${limiteInferior} ate ${limiteSuperior}]`);
  console.log(`Quantidade de valores dentro do intervalo: ${quantidade}`);
}

module.exports = { contarNoIntervalo, executar };
