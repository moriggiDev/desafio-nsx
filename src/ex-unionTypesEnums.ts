 /*// Union types permitem que uma variável seja de um tipo ou outro
   // Variável que pode ser string ou number
let id: string | number;

id = "ABC123"; // Ok
id = 123;      // Ok
id = true;     // ERRO           

  // Útil para valores específicos (literal types)
*/
type Status = "ativo" | "inativo" | "pendente";

let statusUsuario: Status = "ativo";
statusUsuario = "inativo";
statusUsuario = "pendente";
  // statusUsuario = "qualquercoisa"        // ERRO


//  Enums são conjuntos de constantes nomeadas:

   // Enum básico (valores numéricos automáticos: 0, 1, 2)
enum DiaSemana {
    Domingo,              //0
    Segunda,              //1
    Terca,                //2   
    Quarta,               //3
    Quinta,               //4   
    Sexta,                //5
    Sabado                //6
}

let hoje: DiaSemana = DiaSemana.Sexta;
console.log(hoje); // Imprime: 5

// Enum com strings (mais comum e legível)
enum StatusPagamento {
    Pendente = "PENDENTE",
    Aprovado = "APROVADO",
    Recusado = "RECUSADO"
}

let pagamento: StatusPagamento = StatusPagamento.Aprovado;
console.log(pagamento); // Imprime: "APROVADO





