import MyClass from "../src/myClass.js";
import { expect } from "chai";
const myObj = new MyClass();

describe ("Test suite", function () {
  it("Test the add method", function () {
    expect(myObj.add (1, 2)).to.be.equal(3);
  });
  it("Test the subtract method", function () {
    expect(myObj.subtract (10, 3)).to.be.equal(7);
  });
  it("Test the multiply method", function () {
    expect(myObj.multiply (5, 6)).to.be.equal(30);
  });
  it("Test the divide method", function () {
    expect(myObj.divide (1, 2)).to.be.equal(.5);
  });
});