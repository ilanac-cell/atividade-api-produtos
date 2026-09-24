const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Função que retorna o produto
const obterProduto = (req, res) => {
  const produto = {
    nome: "Teclado Mecânico",
    preco: 299.90,
    categoria: "Periféricos"
  };
  res.json(produto);
};

// Responde tanto na raiz (/) como em (/produtos)
app.get("/", obterProduto);
app.get("/produtos", obterProduto);

app.listen(PORT, () => {
  console.log(`Servidor funcionando em http://localhost:${PORT}`);
});


