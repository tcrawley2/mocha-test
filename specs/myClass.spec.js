import MyClass from "../src/myClass.js";
import { expect } from "chai";
const myObj = new MyClass();

describe ("Test suite", function () {
  it("Test the add method", function () {
    expect(myObj.add (1, 2)).to.be.equal(3);
  });
});