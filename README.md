# Algoritmos em JavaScript

Projeto com 6 algoritmos, acessados por um menu interativo no terminal.
Cada algoritmo fica em seu proprio arquivo. Roda com Node.js.

## Algoritmos

1. **Numero e primo** — verifica se um inteiro positivo e primo.
2. **Somatorio** — soma um conjunto de numeros informados.
3. **Fibonacci** — gera os N primeiros termos da sequencia (0, 1, 1, 2, 3, 5, 8, 13 ...).
4. **Maximo divisor comum (MDC)** — algoritmo de Euclides para dois inteiros.
5. **Ordenacao** — ordena um vetor usando o metodo Quicksort.
6. **Contagem** — conta quantos valores do conjunto estao dentro de um intervalo.

## Estrutura

```
algoritmos-javascript/
├── .editorconfig
├── .gitignore
├── README.md
└── src/
    ├── main.js                  (menu principal)
    ├── numeroPrimo.js
    ├── somatorio.js
    ├── fibonacci.js
    ├── mdc.js
    ├── ordenacao.js             (Quicksort)
    └── contagem.js
```

## Pre-requisito

Ter o **Node.js** instalado. Para checar, no terminal:

```bash
node -v
```

Se aparecer um numero de versao (ex.: v22.x), esta pronto. Se der erro,
instale o Node em https://nodejs.org (baixe a versao LTS).

## Como executar

Abra o terminal na pasta do projeto e rode:

```bash
node src/main.js
```

O menu vai aparecer. Digite o numero da opcao desejada e aperte Enter.

Diferente do Java, o JavaScript **nao precisa compilar**: o Node executa o
codigo diretamente. Por isso e um comando so, sem etapa de `javac`.

## Observacao sobre a Contagem

O enunciado da contagem e um pouco aberto. A interpretacao usada aqui e:
contar quantos valores do conjunto estao entre o **primeiro valor digitado**
e **N** (a quantidade de numeros informada), incluindo os limites. Caso o
professor peca outro intervalo, basta ajustar `limiteInferior` e
`limiteSuperior` no arquivo `contagem.js`.

## API de operacoes (Express)

Alem do menu no terminal, o projeto tem uma pequena API feita com o
**Express** (arquivo `src/server.js`). Ela recebe dois numeros (`a` e `b`)
via requisicao **POST** e devolve o resultado da operacao em JSON.

### Rotas disponiveis

| Metodo | Rota              | O que faz                          |
|--------|-------------------|------------------------------------|
| GET    | `/`               | Confere se o servidor esta no ar   |
| POST   | `/soma`           | Soma `a + b`                       |
| POST   | `/subtracao`      | Subtrai `a - b`                    |
| POST   | `/multiplicacao`  | Multiplica `a * b`                 |
| POST   | `/divisao`        | Divide `a / b` (erro se `b` for 0) |

### Como rodar a API

Na pasta do projeto, inicie o servidor:

```bash
npm start
```

Vai aparecer `Servidor escutando em http://localhost:3001/`. Deixe esse
terminal aberto enquanto for testar.

### Como testar

O corpo da requisicao deve ser um JSON com os campos `a` e `b`, por exemplo:

```json
{ "a": 7, "b": 5 }
```

E a resposta vem assim:

```json
{ "operacao": "soma", "a": 7, "b": 5, "resultado": 12 }
```

Formas de enviar a requisicao:

- **Postman / Insomnia** — crie uma requisicao POST para a rota desejada,
  escolha o corpo como `raw` / JSON e cole o exemplo acima.
- **VS Code (extensao REST Client)** — abra o arquivo `testes.http` (ja
  incluido no projeto) e clique em "Send Request" em cima de cada requisicao.
- **Terminal (curl)**:

```bash
curl -X POST http://localhost:3001/soma \
  -H "Content-Type: application/json" \
  -d '{"a":7,"b":5}'
```

### Observacao

A rota `/soma` reaproveita a funcao `somar()` do arquivo `somatorio.js`,
mostrando como a API pode usar as funcoes que ja existem no projeto. Foi
usado o `express.json()` (embutido no Express) para ler o corpo das
requisicoes, no lugar da biblioteca `body-parser`.
