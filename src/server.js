// Servidor Express - Exercicio de requisicoes POST
// Recebe dois numeros (a, b) no corpo da requisicao, processa e devolve o resultado.

const express = require("express");
const { somar } = require("./somatorio"); // reaproveitando a funcao que ja existe no projeto

const app = express();
app.use(express.json()); // permite ler JSON enviado no corpo do POST (substitui o body-parser)

const porta = 3001;

// Rota de teste (GET) so para conferir se o servidor esta no ar
app.get("/", function (req, res) {
  res.send("Servidor de operacoes no ar :-) Use POST em /soma, /subtracao, /multiplicacao ou /divisao");
});

// ---------- Operacoes ----------

app.post("/soma", function (req, res) {
  const { a, b } = req.body;
  const resultado = somar([a, b]); // usa a funcao somar() do somatorio.js
  res.json({ operacao: "soma", a, b, resultado });
});

app.post("/subtracao", function (req, res) {
  const { a, b } = req.body;
  const resultado = a - b;
  res.json({ operacao: "subtracao", a, b, resultado });
});

app.post("/multiplicacao", function (req, res) {
  const { a, b } = req.body;
  const resultado = a * b;
  res.json({ operacao: "multiplicacao", a, b, resultado });
});

app.post("/divisao", function (req, res) {
  const { a, b } = req.body;
  if (b === 0) {
    return res.status(400).json({ erro: "Nao e possivel dividir por zero." });
  }
  const resultado = a / b;
  res.json({ operacao: "divisao", a, b, resultado });
});

// ---------- Inicia o servidor ----------
app.listen(porta, function () {
  console.log(`Servidor escutando em http://localhost:${porta}/`);
});
