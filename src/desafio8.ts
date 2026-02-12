// Utility types ------PICK e OMIT

// Criando um tipo usuário completo
type Usuario = {
    id: number;
    nome: string;
    email: string;
    idade: number;
    ativo: boolean;
};

// Use PICK para criar UsuarioResumido
type UsuarioResumido = Pick<Usuario, "nome" | "email">;

// Usem OMIT para criar UsuarioSemId
type UsuarioSemId = Omit<Usuario, "id">;

// Exemplo de uso
const resumo: UsuarioResumido = {
    nome: "João Silva",
    email: "joaoo@email.com"
};

const novoCadastro: UsuarioSemId = {
    nome: "Maria Oliveira",
    email: "maria@email.com",
    idade: 25,
    ativo: true
};

console.log(resumo);
console.log(novoCadastro);