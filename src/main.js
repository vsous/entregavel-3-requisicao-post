const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

const numeroPrimo = require("./numeroPrimo");
const somatorio = require("./somatorio");
const fibonacci = require("./fibonacci");
const mdc = require("./mdc");
const ordenacao = require("./ordenacao");
const contagem = require("./contagem");

async function main() {

  const rl = readline.createInterface({ input, output });
  let opcao = -1;

  do {
    exibirMenu();
    const entrada = await rl.question("Escolha uma opcao: ");
    opcao = Number(entrada);
    console.log();

    switch (opcao) {
      case 1:
        await numeroPrimo.executar(rl);
        break;
      case 2:
        await somatorio.executar(rl);
        break;
      case 3:
        await fibonacci.executar(rl);
        break;
      case 4:
        await mdc.executar(rl);
        break;
      case 5:
        await ordenacao.executar(rl);
        break;
      case 6:
        await contagem.executar(rl);
        break;
      case 0:
        console.log("Encerrando o programa. Ate mais!");
        break;
      default:
        console.log("Opcao inexistente. Tente novamente.");
    }

    console.log();
  } while (opcao !== 0);

  rl.close();
}

function exibirMenu() {
  console.log("========= MENU DE ALGORITMOS =========");
  console.log("1 - Numero e primo?");
  console.log("2 - Somatorio de um conjunto de numeros");
  console.log("3 - Fibonacci");
  console.log("4 - Maximo divisor comum (MDC)");
  console.log("5 - Ordenacao (Quicksort)");
  console.log("6 - Contagem");
  console.log("0 - Sair");
  console.log("======================================");
}

main();
