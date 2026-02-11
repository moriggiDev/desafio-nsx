//  Resolva o Desafio usando Union Types

// 1. crie um type alias "StatusPedido" que aceite apenas: "pendente", "enviado" ou "entregue"

type StatusPedido = "pendente" | "enviado" | "entregue";

// 2. Crie uma função "avisarCliente" que: 
//  - Recebe um StatusPedido como parâmetro
//  - Retorna uma mensagem amigável ( string )

function avisarCliente(status: StatusPedido): string {
    switch (status) {
        case "pendente":
            return "Seu pedido foi recebido e aguardando o pagamento."; // personalize depois
        case "enviado":
            return "Seu pedido foi enviado e está a caminho!";
        case "entregue":
            return "Seu pedido foi entregue. aproveite!";        
    }
}

console.log(avisarCliente("pendente"));
console.log(avisarCliente("enviado"));
console.log(avisarCliente("entregue"));
// console.log(avisarCliente("cancelado")); // ERRO

// Resolvendo o mesmo desafio mas agora com Enums

enum StatusPedidoEnum {
    Pendente = "pendente",
    Enviado = "enviado",
    Entregue = "entregue"
}

// A função com Enum
function aviseCliente(status: StatusPedidoEnum): string {
    switch (status) {
        case StatusPedidoEnum.Pendente:
            return "Aguardando pagamento.";
        case StatusPedidoEnum.Enviado:
            return "Seu pedido está a caminho";
        case StatusPedidoEnum.Entregue:
            return "Pedido entregue com sucesso!";
    }
}

console.log(aviseCliente(StatusPedidoEnum.Pendente));
console.log(aviseCliente(StatusPedidoEnum.Enviado));
console.log(aviseCliente(StatusPedidoEnum.Entregue));
// console.log(aviseCliente("cancelado")); // ERRO

