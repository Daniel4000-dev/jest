const multiply = require('./index');

// TEST SUITE

test("2 and 5 multiply equal 10", async()=>{
    expect(multiply(2,5)).toBe(10); //exact equality
})

test("2 and 5 multiply not equal 10", async()=>{
    expect(multiply(2,6)).not.toBe(10); //exact equality
})