const assert = require('assert');
const operations = require('./operations.js');

it('correctly calculates the sum of 1 and 3',()=>{
assert.equal(operations.add(1,3),4)
})

it('correctly calculates the sum of -1 and -2',()=>{
assert.equal(operations.add(-1,-2),-3)
})

it('correctly calculates the difference of 4 and 3',()=>{
assert.equal(operations.subtract(4,3),1)
})

it('correctly calculates the product of 2 and 3',()=>{
assert.equal(operations.multiply(2,3),6)
})

it('correctly calculates the quotient of 4 and 2',()=>{
assert.equal(operations.divide(4,2),2)
})

it('indicates failure if a string is used instaed of a number',()=>{
assert.equal(operations.validateNumbers('hello',3),false)
})

it('indicates failure if two strings are used instead of numbers',()=>{
assert.equal(operations.validateNumbers('hello','world'),false)
})

it('sucesfully runs if two numbers are used',()=>{
assert.equal(operations.validateNumbers(1,3),true)
})

