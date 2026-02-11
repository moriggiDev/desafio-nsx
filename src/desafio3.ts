// DESAFIO 3: Interface e Tipos de objetos

// Crie a interface Usuario aqui
// Deve conter: 
// - id: number ( readonly - não pode ser alterado )
// - nome: string ( obrigatório )
// - email: string ( obrigatório )
// - telefone: string ( opcional )

interface Usuario {
  readonly id: number;
  nome: string;
  email: string;
  telefone?: string;
};

const usuario1: Usuario = {
    id: 1,
    nome: "Elias Moriggi",
    email: "elias@gmail.com",
    telefone: "77999990000"
};

const usuario2: Usuario = {
    id: 2,
    nome: "Alice Moriggi",
    email: "alice@gmail.com",
    telefone: ""
};

// Crie a função exibirUsuario aqui
// Deve receber um objeto do tipo Usuario
// Deve imprimir todos os dados no console

function exibirUsuario(usuario: Usuario): void {
  console.log(`ID: ${usuario.id}`);
  console.log(`Nome: ${usuario.nome}`);
  console.log(`Email: ${usuario.email}`);
  if (usuario.telefone) {
    console.log(`Telefone: ${usuario.telefone}`);
  } else {
    console.log("Telefone: Não informado");
  }
};

exibirUsuario(usuario1);
exibirUsuario(usuario2);

// TESTE DE ERRO: Desconecte e veja os erros
// usuario1.id = 999;    // Cannot assign to 'id' because it is a read-only property.
// const usuario3: Usuario = {
//   id: 3,              // Property 'email' is missing in type '{ id: number; nome: string; }' but required in type 'Usuario'.
//   nome: "João"
//};

