const functify = require('./index');

test('stringify an object with a function', () => {
  expect(functify.stringify({f: function() {console.log(1)}})).toBe('{"f":"function () {\\n      console.log(1);\\n    }\"}');
});
test('stringify an object with number', () => {
    expect(functify.stringify({i: 3})).toBe('{"i":3}');
});
test('stringify an object with a string', () => {
    expect(functify.stringify({s: "function () is "})).toBe('{"s":"function () is "}');
});
test('parse an object with a function', () => {
    expect(functify.parse('{"f":"function () {\\n      return 1;\\n    }\"}').f()).toBe(1)
});
test('parsed methods should have the correct context', () => {
    expect(functify.parse('{"i":3, "f":"function () {\\n      return this.i;\\n    }\"}').f()).toBe(3)
});