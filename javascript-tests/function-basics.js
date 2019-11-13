window.onload = () => {
    // All code goes in here.
}


function simpleFunction() {
    console.log("functions should consist of statments designed to preform a single task.");
}

function functionParameters(value)  {
    console.log(value);
}

function functionReturn(addResult) {
    return  "The add function returned." + addResult;
}

function add(a, b) {
    return a + b
}

simpleFunction();

functionParameters("Many functions take parameters.");

const addResult = add(2, 3);

console.log('Add Result', addResult)

const returnValue = functionReturn(addResult);

console.log(returnValue)

