// Entendendo o desafio:
// 1. Criar função saudar()
// 2. Receber parâmetro nome (obrigatório)
// 3. Receber parâmetro saudacao (opcional)
// 4. Se saudacao não for passada, usar "olá" como padrão
// 5. Retornar string formatada (ex: "Olá, Elias!")


// DESAFIO 2 - Tipagens de funções

// Criar a Arrow function saudar aqui
//const saudar = (nome: string, saudacao: string = "Olá"): string => 
  //  `${saudacao}, ${nome}!`;

// Criar a função saudar aqui
function saudar(
    nome: string,
    saudacao: string = "Olá"
): string {
    return `${saudacao}, ${nome}!`;   // Se colocar nome antes no retorno, fica errado.
};

console.log(saudar("Elias")); // Assim usa o padrão.
console.log(saudar("Felipe", "Bora codar")); // Usa a saudacao personalizada. A ordem dos fatores altera a sequencia do produto.
console.log(saudar("Carlos", "Bom dia"));  
console.log(saudar("Davi", "Boa noite"));

// TESTE DE ERRO: Descomente e veja os erros
// saudar();                    // Expected 1-2 arguments, but got 0.
// saudar(123);                // Argument of type 'number' is not assignable to parameter of type 'string'. 
// saudar("Ana", 456);        // Argument of type 'number' is not assignable to parameter of type 'string'. 