// Números mágicos

// Basicamente são cálculos matemático que fazemos na nossa programação quando geralmente fazemos condicionais

// Exemplo Simples
// setTimeout ou setInterval

// Don't this
setTimeout(() => {}, 2592000000);

// Do this
setTimeout(() => {}, 1000 * 60 * 60 * 24 * 30); // 30 Dias

// Or better do this
const INTERVAL_30_DAYS = 1000 * 60 * 60 * 24 * 30;
setTimeout(() => {},  INTERVAL_30_DAYS);


// Exemplo Avançado
// Lidando com números que simbolizam algo maior

/*
  Dicas:
    - Prefira trabalhar com preços em centavos, pois evita problemas específicos de linguagem como precisão de float (multiplica o preço por 100 e salva em centavos para ter um número inteiro)
    - Para lidar com horários prefira salvar os dados em minutos, pois facilita a conversão depois
*/

function calculateDiscount(priceInCents, discountAmountInPercentage) {
  // Retorna o desconto
}