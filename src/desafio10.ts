// Crie tipos para simular dados de uma API

type Usuario = {
    id: number;
    nome: string;
    email: string;
};

type Produto = {
    id: number;
    nome: string;
    preco: number;
};

// Crie a função Generica buscarDados
// - Recebe: url (string)
// - Retorna: Promise<T>
// - Deve ser async
// - Para simular, use setTimeout e retorne dados fake
async function buscarDados<T>(url: string): Promise<T> {
    await new Promise(resolve => setTimeout(resolve, 1000));

   const dadosFake: any = {
    "/api/usuarios/1": { id: 1, nome: "Elias", email: "elias@dev.com" },
    "/api/produtos/1": { id: 1, nome: "Notebook", preco: 2500 }
   };

    return dadosFake[url];
}

async function executarDesafios() {
    console.log("Buscando usuário...");
    const usuario = await buscarDados<Usuario>("/api/usuarios/1");
    console.log("Usuário:", usuario);

    console.log("\nBuscando produto...");
    const produto = await buscarDados<Produto>("/api/produtos/1");
    console.log("Produto:", produto);
    console.log(`${produto.nome} custa R$ ${produto.preco}`);

}

executarDesafios();