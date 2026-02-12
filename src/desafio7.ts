//   Crie a função genérica

// 1. Crie a função retornarPrimeiroElemento<T>
//   - Recebe: array de qualquer tipo (T[])
//   - Retorna: o primeiro elemento (T)
//   - Deve ser SEGURA (verificar se o array não está vazio!)

function retornarPrimeiroElemento<T>(array: T[]): T | undefined {
    if (array.length === 0) {
        console.log("Array vazio! Não é possivel retornar o primeiro elemento.");
        return undefined;
    } else {
        return array[0];
    }
}

// 2. teste com array de numeros
const numeros = [10, 20, 30];
const primeiroNumero = retornarPrimeiroElemento(numeros);
console.log("Primeiro número:", primeiroNumero);

// 3. teste com array de strings
const frutas = ["maçã", "banana", "laranja"];
const primeiraFruta = retornarPrimeiroElemento(frutas);
console.log("primeira fruta:", primeiraFruta);

// 4. teste com array de objeto
type Pessoa = {
    nome: string;
    idade: number;
};

const pessoas: Pessoa[] = [
    { nome: "Alice", idade: 30 },
    { nome: "Bob", idade: 25 },
    { nome: "Charlie", idade: 35 }
];

const primeiraPessoa = retornarPrimeiroElemento(pessoas);
console.log("Primeira pessoa:", primeiraPessoa);

// 5. Teste com array vazio 
const vazio: number[] = [];
const resultado = retornarPrimeiroElemento(vazio);
console.log("Resultado: Array vazio!", resultado);