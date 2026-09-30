function quicksort(vetor, inicio = 0, fim = vetor.length - 1) {
  if (inicio < fim) {
    const posicaoPivo = particionar(vetor, inicio, fim);
    quicksort(vetor, inicio, posicaoPivo - 1);
    quicksort(vetor, posicaoPivo + 1, fim);
  return vetor;
}
}

function particionar(vetor, inicio, fim) {
  const pivo = vetor[fim];
  let i = inicio - 1;

  for (let j = inicio; j < fim; j++) {
    if (vetor[j] <= pivo) {
      i++;
      trocar(vetor, i, j);
    }
  }

  trocar(vetor, i + 1, fim);
  return i + 1;
}

function trocar(vetor, a, b) {
  const temp = vetor[a];
  vetor[a] = vetor[b];
  vetor[b] = temp;
}

async function executar(rl) {
  const qtd = Number(await rl.question("Quantos numeros voce vai ordenar? "));

  const vetor = [];
  for (let i = 0; i < qtd; i++) {
    vetor.push(Number(await rl.question(`Digite o numero ${i + 1}: `)));
  }

  console.log("Vetor original:  [" + vetor.join(", ") + "]");
  quicksort(vetor);
  console.log("Vetor ordenado:  [" + vetor.join(", ") + "]");
}

module.exports = { quicksort, executar };
