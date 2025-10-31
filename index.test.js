const multiply = require('./index');

// TEST SUITE

test('Null Values', () => {
    const value = null;
    expect(value).toBeNull();
    expect(value).toBeDefined();
    expect(value).toBeUndefined();
    expect(value).toBeTruthy()
})