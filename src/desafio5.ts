// Bloco 1: Animal tem nome
type Animal = {
  nome: string;
};

// Bloco 2: Mamífero tem patas
type Mamifero = {
  quantidadePatas: number;
};

// Bloco 3: Cachorro JUNTA os dois
type Cachorro = Animal & Mamifero;

// Agora crie um cachorro (precisa ter NOME e PATAS)
let rex: Cachorro = {
  nome: "Rex",
  quantidadePatas: 4
};

let toto: Cachorro = {
    nome: "Toto",
    quantidadePatas: 4
};

console.log(toto);
console.log(rex);