const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("caesar", () => {
  
  it ("should return false if shift is more than 25, less than -25, or 0", () => {
    let testValue = caesar("test message", 40);
    expect(testValue).to.equal(false);
    testValue = caesar("test message", -40);
    expect(testValue).to.equal(false);
  })
  
})