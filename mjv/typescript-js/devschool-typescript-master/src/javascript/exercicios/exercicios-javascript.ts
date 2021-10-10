/**
 * Faça a função retornar um array somente com os números pares
 * @param numeros 
 */
export function somentePares(numeros: number[]): number[] {
    
    return numeros.filter(pares => pares%2 === 0);
}

console.log(somentePares([1, 2, 3, 4]));

/**
 * Complete a função para retornar a soma de todos os números do vetor
 * @param numeros 
 */
export function somaNumeros(numeros: number[]): number {
    return numeros.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
}

/**
 * Complete a função para retornar um vetor com o quadrado de cada valor
 * @param numeros 
 */
export function elevarAoQuadrado(numeros: number[]): number[] {
    return numeros.map(numero => numero * numero);
}

console.log(elevarAoQuadrado([1, 2, 3, 4]));
