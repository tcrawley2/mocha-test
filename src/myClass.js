class MyClass {
  constructor () {
    console.log("initiate");
  }

  add (arg1, arg2) {
    const result = arg1 + arg2;
    return result;
  }

  subtract (arg1, arg2) {
    const result = arg1 - arg2;
    return result;
  }

  multiply (arg1, arg2) {
    const result = arg1 * arg2;
    return result;
  }

  divide (arg1, arg2) {
    if (arg2 == 0) {
      console.log("ERROR: Cannot divide by zero.");
      return undefined;
    }
    else {
      const result = arg1 / arg2;
      return result;
    }
  }
}

export default MyClass;