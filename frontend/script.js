async function carregarDados() {
  try {
    const resposta = await fetch(
      "https://laughing-umbrella-vprv5qpqrv94cwgj-3000.app.github.dev/produtos"
    );

    const produto = await resposta.json();

    document.getElementById("lista-produtos").innerHTML = `
      <div class="card">
        <h2>${produto.nome}</h2>
        <p>Categoria: ${produto.categoria}</p>
        <p>R$ ${produto.preco.toFixed(2)}</p>
      </div>
    `;
  } catch (erro) {
    document.getElementById("lista-produtos").innerHTML =
      "<p>Não foi possível carregar o produto.</p>";
  }
}

carregarDados();
