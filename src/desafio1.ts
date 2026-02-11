// DESAFIO 1 - Tipagem básica e inferência
// 1. Declare uma variável "nome" do tipo string
let nome: string = "Elias";

// 2. Declare uma variável "idade" do tipo number
let idade: number = 44;

// 3. declare uma variável "desenvolvedor" do tipo boolean
let desenvolvedor: boolean = true;

// 4. Declare uma variável "tecnologias" que é um array de strings
let tecnologias: string[] = ["TypeScript", "JavaScript", "Node.js"];

// 5. imprima todas as variáveis
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Desenvolvedor:", desenvolvedor);
console.log("Tecnologias:", tecnologias);

// 6. TESTE DE ERRO: Descomente as linhas abaixo UMA POR VEZ
//    e veja o erro que o TypeScript mostra

// nome = 123;   // Type 'number' is not assignable to type 'string'.
// idade = "trinta";  // Type 'string' is not assignable to type 'number'.
// desenvolvedor = "sim";  // Type 'string' is not assignable to type 'boolean'.
// tecnologias = "JavaScript";  // Type 'string' is not assignable to type 'string[]'.
// tecnologias.push(999);  // Argument of type 'number' is not assignable to parameter of type 'string'.