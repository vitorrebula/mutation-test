const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow();
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });

  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });

  // ============================================================
  // === NOVOS TESTES — adicionados para matar mutantes sobreviventes
  // ============================================================

  // --- raizQuadrada: mutante ConditionalExpression (n < 0 → false) sobreviveu
  // O teste original só testava n >= 0. Precisamos confirmar que n = 0 retorna
  // zero e que n < 0 lança erro.
  test('raizQuadrada: deve lançar erro para número negativo', () => {
    expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
  });
  test('raizQuadrada: deve retornar 0 para entrada 0', () => {
    expect(raizQuadrada(0)).toBe(0);
  });

  // --- divisao: mutante StringLiteral (mensagem de erro substituída por "")
  test('divisao: deve lançar erro com mensagem correta ao dividir por zero', () => {
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });

  // --- fatorial: mutantes ConditionalExpression e EqualityOperator sobreviveram
  // n < 0 → false (a condição de erro nunca disparava), n === 0 e n === 1 → false
  test('fatorial: deve lançar erro para número negativo', () => {
    expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
  });
  test('fatorial: deve retornar 1 para n = 0', () => {
    expect(fatorial(0)).toBe(1);
  });
  test('fatorial: deve retornar 1 para n = 1', () => {
    expect(fatorial(1)).toBe(1);
  });
  test('fatorial: deve calcular corretamente para n = 5', () => {
    expect(fatorial(5)).toBe(120);
  });

  // --- mediaArray: mutante ConditionalExpression (length === 0 → false) sobreviveu
  test('mediaArray: deve retornar 0 para array vazio', () => {
    expect(mediaArray([])).toBe(0);
  });

  // --- maximoArray: mutante ConditionalExpression (length === 0 → false) sobreviveu
  test('maximoArray: deve lançar erro para array vazio', () => {
    expect(() => maximoArray([])).toThrow();
  });

  // --- minimoArray: mutante ConditionalExpression (length === 0 → false) sobreviveu
  test('minimoArray: deve lançar erro para array vazio', () => {
    expect(() => minimoArray([])).toThrow();
  });

  // --- isPar: mutante EqualityOperator (=== → !==) sobreviveu
  // O teste original só testava isPar(100) = true. Falta testar false.
  test('isPar: deve retornar false para número ímpar', () => {
    expect(isPar(3)).toBe(false);
  });

  // --- isImpar: mutante EqualityOperator (!== → ===) sobreviveu
  test('isImpar: deve retornar false para número par', () => {
    expect(isImpar(4)).toBe(false);
  });

  // --- isPrimo: mutante ConditionalExpression (n <= 1 → false) e
  //     BlockStatement sobreviveram. Testar n = 0, 1 e um composto.
  test('isPrimo: deve retornar false para n = 0', () => {
    expect(isPrimo(0)).toBe(false);
  });
  test('isPrimo: deve retornar false para n = 1', () => {
    expect(isPrimo(1)).toBe(false);
  });
  test('isPrimo: deve retornar false para número composto', () => {
    expect(isPrimo(9)).toBe(false);
  });

  // --- fibonacci: mutante ArithmeticOperator (n - 2 → n + 2) sobreviveu
  // O teste original só usava fibonacci(10). Testar valores menores isola melhor.
  test('fibonacci: deve retornar 0 para n = 0', () => {
    expect(fibonacci(0)).toBe(0);
  });
  test('fibonacci: deve retornar 1 para n = 1', () => {
    expect(fibonacci(1)).toBe(1);
  });
  test('fibonacci: deve retornar 1 para n = 2', () => {
    expect(fibonacci(2)).toBe(1);
  });
  test('fibonacci: deve retornar 5 para n = 5', () => {
    expect(fibonacci(5)).toBe(5);
  });

  // --- produtoArray: mutante ConditionalExpression (length === 0 → false) sobreviveu
  test('produtoArray: deve retornar 1 para array vazio', () => {
    expect(produtoArray([])).toBe(1);
  });

  // --- clamp: mutantes ConditionalExpression e EqualityOperator sobreviveram
  // O teste original só testava valor dentro do intervalo. Precisamos testar
  // valor abaixo do mínimo e valor acima do máximo.
  test('clamp: deve retornar min quando valor é menor que min', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });
  test('clamp: deve retornar max quando valor é maior que max', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });
  test('clamp: deve retornar min quando valor é igual a min', () => {
    expect(clamp(0, 0, 10)).toBe(0);
  });
  test('clamp: deve retornar max quando valor é igual a max', () => {
    expect(clamp(10, 0, 10)).toBe(10);
  });

  // --- celsiusParaFahrenheit: mutantes ArithmeticOperator sobreviveram
  // (* 9/5 → / 9/5, etc.). Testar com valores distintos de 0 mata esses mutantes.
  test('celsiusParaFahrenheit: deve converter 100°C para 212°F', () => {
    expect(celsiusParaFahrenheit(100)).toBe(212);
  });
  test('celsiusParaFahrenheit: deve converter -40°C para -40°F', () => {
    expect(celsiusParaFahrenheit(-40)).toBe(-40);
  });

  // --- fahrenheitParaCelsius: mutantes ArithmeticOperator sobreviveram
  // (* 5/9 → / 5, etc.)
  test('fahrenheitParaCelsius: deve converter 212°F para 100°C', () => {
    expect(fahrenheitParaCelsius(212)).toBe(100);
  });
  test('fahrenheitParaCelsius: deve converter -40°F para -40°C', () => {
    expect(fahrenheitParaCelsius(-40)).toBeCloseTo(-40);
  });

  // --- inverso: mutante ConditionalExpression (n === 0 → false) sobreviveu
  test('inverso: deve lançar erro para n = 0', () => {
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
  });

  // --- isMaiorQue: mutantes ConditionalExpression (true/false) e EqualityOperator sobreviveram
  // O teste original só verificava true. Falta false e o caso de igualdade.
  test('isMaiorQue: deve retornar false quando a é menor que b', () => {
    expect(isMaiorQue(3, 10)).toBe(false);
  });
  test('isMaiorQue: deve retornar false quando a é igual a b', () => {
    expect(isMaiorQue(5, 5)).toBe(false);
  });

  // --- isMenorQue: mesmos problemas que isMaiorQue
  test('isMenorQue: deve retornar false quando a é maior que b', () => {
    expect(isMenorQue(10, 3)).toBe(false);
  });
  test('isMenorQue: deve retornar false quando a é igual a b', () => {
    expect(isMenorQue(5, 5)).toBe(false);
  });

  // --- isEqual: mutante ConditionalExpression (true) sobreviveu
  test('isEqual: deve retornar false para números diferentes', () => {
    expect(isEqual(3, 7)).toBe(false);
  });

  // --- medianaArray: mutantes ConditionalExpression, ArrowFunction e
  //     ArithmeticOperator sobreviveram.
  // Array vazio, array de tamanho par e verificação da lógica de divisão.
  test('medianaArray: deve lançar erro para array vazio', () => {
    expect(() => medianaArray([])).toThrow();
  });
  test('medianaArray: deve calcular a mediana de um array par (média dos dois centrais)', () => {
    expect(medianaArray([1, 2, 3, 4])).toBe(2.5);
  });
  test('medianaArray: deve ordenar o array antes de calcular a mediana', () => {
    expect(medianaArray([5, 1, 3])).toBe(3);
  });
  test('medianaArray: deve calcular mediana de array par desordenado', () => {
    expect(medianaArray([4, 1, 3, 2])).toBe(2.5);
  });

  // --- dobro: mutante ArithmeticOperator (n * 2 → n / 2) sobreviveu
  // O teste original usava dobro(10) = 20, que também seria satisfeito por n*2.
  // Precisamos de outro valor que distingua n*2 de n/2.
  test('dobro: deve retornar 6 para entrada 3', () => {
    expect(dobro(3)).toBe(6);
  });

  // --- triplo: mesmo problema
  test('triplo: deve retornar 9 para entrada 3', () => {
    expect(triplo(3)).toBe(9);
  });
});