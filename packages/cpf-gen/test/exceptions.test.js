const cpfGen = require('../build');

test('Prefixed value cannot accept string with more than 9 digits', () => {
  expect(() => cpfGen({ prefix: '1234567890' })).toThrow(Error);
  expect(() => cpfGen({ prefix: '123.456.789-0' })).toThrow(Error);
});
