var arg1 = "", arg2 = "";
let isArg1Set = false;
var operator = ""

function reset() {
    arg1 = "", arg2 = "";
    isArg1Set = false;
    operator = ""
    showValue("");
}

function setArg1(txt) {
    arg1 = arg1.concat(txt);
    showValue(arg1);
}

function setArg2(txt) {
    arg2 = arg2.concat(txt);
    showValue(arg2);
}

function setArg(txt) {
    if (isArg1Set) {
        setArg2(txt);
    } else {
        setArg1(txt);
    }
}

function setOperator(op) {
    operator = op;
    isArg1Set = true;
}

function compute(operator, num1, num2) {
    let value;
    switch (operator) {
        case "add":
            value = num1 + num2;
            break;
        case "subtract":
            value = arg1 - arg2;
            break;
        case "multiply":
            value = arg1 * arg2;
            break;
        case "divide":
            value = arg1 / arg2;
            break;
        default:
            console.error('Invalid operator');
            value = NaN;
            break;
    }

    return value;
}

function showValue(value) {
    document.getElementById("result").value = value;
    updateResult();
}

function calculate() {
    let result = compute(operator, Number(arg1), Number(arg2));
    console.log("result: ", result);
    reset()
    setArg1(result);
}

function updateResult() {
    let resultElement = document.getElementById("result");
    let originalValue = resultElement.value;
    let resultValue = parseFloat(resultElement.value);
    if (!isNaN(resultValue)) {
        let formattedResult = new Intl.NumberFormat().format(resultValue);
        resultElement.value = formattedResult;
    } else {
        resultElement.value = originalValue;
    }
}

function deleteFromRight() {
    let valueWithoutCommas = document.getElementById("result").value.replaceAll(',', '');
    console.log("valueWithoutCommas", valueWithoutCommas)
    showValue(valueWithoutCommas.slice(0, -1));
}