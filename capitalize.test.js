const capitalize = require('./capitalize');

test('takes a string and capitalizes the first letter', () => {
    expect(capitalize('hello, world')).toBe('Hello, world');
})