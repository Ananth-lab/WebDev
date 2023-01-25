const num1 = document.querySelector(".num1") as HTMLInputElement;
const num2 = document.querySelector(".num2") as HTMLInputElement;
const button = document.querySelector("button")!;

const numResults: Array<number> = [];

const stringResults: Array<string> = [];

type numOrString = number | string;

interface ResultObj{
    val : number,
    timestamp : Date
}

function add(num1: numOrString, num2: numOrString) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        return num1 + num2;
    }
    else if (typeof num1 == "string" && typeof num2 == "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}


function printResult(resultObj: ResultObj) {
    console.log("printing the value of the object", resultObj.val)
}

button.addEventListener("click", () => {
    const n1 = num1.value;
    const n2 = num2.value;
    const result = add(+n1, +n2);
    console.log("result of two numbers", result)
    numResults.push(result as number)
    const resultInString = add(n1, n2);
    stringResults.push(resultInString as string);
    console.log("result of two strings", resultInString)
    console.log(numResults, stringResults)
    printResult({ val: result as number, timestamp: new Date() })
})

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("It worked")
    }, 3000)
});

myPromise.then(result => console.log(result.split("t")))