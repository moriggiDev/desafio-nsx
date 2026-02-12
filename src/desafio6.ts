type Produto = {
  id: number;
  nome: string;
  preco: number;
};

let produtos: Produto[] = [
  { id: 1, nome: "Arroz", preco: 20 },
  { id: 2, nome: "Feijão", preco: 8 },
  { id: 3, nome: "Macarrão", preco: 5 },
  { id: 4, nome: "Azeite", preco: 45 }
];

//console.table(produtos);

// Verificar se há produtos
if (produtos.length === 0) {
  console.log("Não há produtos na lista!");
} else {
  // Pegar o primeiro produto de forma SEGURA
  const primeiroProduto = produtos[0];
  
  // Verificar se realmente existe (TypeScript pede isso)
  if (primeiroProduto) {
    let maisCaro: Produto = primeiroProduto;

    // Percorrer todos os produtos
    for (let produto of produtos) {
      console.log(`${produto.nome} custa R$ ${produto.preco}`);
      
      // Se encontrar um mais caro, substitui
      if (produto.preco > maisCaro.preco) {
        maisCaro = produto;
      }
    }

    // Mostrar o resultado
    console.log("\nProduto mais caro:", maisCaro);
    console.log(`${maisCaro.nome} custa R$ ${maisCaro.preco}`);
  }
}