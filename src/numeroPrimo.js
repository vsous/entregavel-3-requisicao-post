function ehPrimo(n) {

  if (n < 2) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

async function executar(rl) {
  const entrada = await rl.question("Digite um numero inteiro positivo: ");
  const n = Number(entrada);

  if (ehPrimo(n)) {
    console.log(`O numero ${n} E PRIMO.`);
  } else {
    console.log(`O numero ${n} NAO e primo.`);
  }
}

module.exports = { ehPrimo, executar };
