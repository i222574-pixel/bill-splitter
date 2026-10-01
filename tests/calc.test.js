const test = require('node:test');
const assert = require('node:assert');
const { parseAmount, splitBill } = require('../utils/calc');

test('parses valid and invalid amounts', () => {
  assert.strictEqual(parseAmount('120.50'), 120.5);
  assert.strictEqual(parseAmount('12,5'), 12.5);
  assert.strictEqual(parseAmount('abc'), 0);
  assert.strictEqual(parseAmount('-5'), 0);
});

test('splits a bill with tip between people', () => {
  const result = splitBill(1000, 10, 4);
  assert.deepStrictEqual(result, { tip: 100, total: 1100, perPerson: 275 });
});

test('never divides by zero people', () => {
  assert.strictEqual(splitBill(300, 0, 0).perPerson, 300);
});
