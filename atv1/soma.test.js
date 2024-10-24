const sum = require('./soma');

test('soma de dois números positivos', () => {
    expect(sum(2, 3)).toBe(5);
});

test('soma de dois números negativos', () => {
    expect(sum(-3, -1)).toBe(-2);
});

test('soma de um número positivo com zero', () => {
    expect(sum(9, 0)).toBe(5);
});

test('soma de um número negativo com zero', () => {
    expect(sum(-4, 0)).toBe(-5);
});

