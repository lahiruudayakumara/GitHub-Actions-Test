require('ts-node/register');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

const assert = require('assert');
test('hello world!', () => {
  assert.strictEqual(1 + 1, 2);
});