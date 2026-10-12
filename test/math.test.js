const { add, multiply } = require('../src/math');
test('add', () => expect(add(2, 3)).toBe(5));
test('multiply', () => expect(multiply(2, 3)).toBe(6));
