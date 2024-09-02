// mojito/mytest/treatment1.js

function treatment1(test) {
    // Access shared functions and values
    var sharedObject = test.options.js();
    sharedObject.sharedFn();
    console.log(sharedObject.sharedVal);
    // Other variant-specific logic
}
