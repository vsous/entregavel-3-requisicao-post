function mdc(a, b) {

  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const resto = a % b;
    a = b;
    b = resto;
  }
  return a;
}

async function executar(rl) {
  const a = Number(await rl.question("Digite o primeiro inteiro (a): "));
  const b = Number(await rl.question("Digite o segundo inteiro (b): "));

  console.log(`O MDC de ${a} e ${b} e: ${mdc(a, b)}`);
}

module.exports = { mdc, executar };
