const reverseString = require('./reverseString');

test('returns the input string reversed', () => {
    expect(reverseString('hello, world')).toBe('dlrow ,olleh');
});