"use strict";
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const button = document.querySelector("button");
const numResults = [];
const stringResults = [];
function add(num1, num2) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        return num1 + num2;
    }
    else if (typeof num1 == "string" && typeof num2 == "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log("printing the value of the object", resultObj.val);
}
button.addEventListener("click", () => {
    const n1 = num1.value;
    const n2 = num2.value;
    const result = add(+n1, +n2);
    console.log("result of two numbers", result);
    numResults.push(result);
    const resultInString = add(n1, n2);
    stringResults.push(resultInString);
    console.log("result of two strings", resultInString);
    console.log(numResults, stringResults);
    printResult({ val: result, timestamp: new Date() });
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It worked");
    }, 3000);
});
myPromise.then(result => console.log(result.split("t")));
