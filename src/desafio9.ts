function processar(valor: string | number): string | number {
    if (typeof valor === "string") {
        console.log(`É uma string! Tamanho: ${valor.length}`);
        return valor.length;
    }

    if (typeof valor === "number") {
        console.log(`É um número! Dobro: ${valor * 2}`);
        return valor * 2;
    }

  return 0;  
}

// testes 
console.log(processar("TypeScript"));
console.log(processar(25));

