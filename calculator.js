var arg1 = "", arg2 = "";
var isArg1Set = false;
var isArg2Set = false;
var operator = ""
var result = 0
var resultTextBox;

function cleanUp() {
    reset();
    setResult(0);
}
function reset() {
    arg1 = "", arg2 = "";
    isArg1Set = false;
    operator = "";
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

function setOperator(op, symbol) {
    if (operator) {
        calculate();
    }
    if (result && !isNaN(result)) {
        arg1 = result;
    }
    operator = op;
    if (arg1) {
        isArg1Set = true;
    }
    showValue(symbol);
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

function setResult(value) {
    result = value
    console.log("result: ", result);
    updateResult(value);
}

function showValue(value) {
    resultTextBox = document.getElementById("result");
    resultTextBox.value = value;
}

function calculate() {
    if (arg1 && arg2) {
        setResult(compute(operator, Number(arg1), Number(arg2)));
    } else {
        setResult(arg1);
    }
    reset()
}

function updateResult(value) {
    let originalValue = resultTextBox.value;
    let newValue = parseFloat(value);
    if (!isNaN(newValue)) {
        let formattedResult = new Intl.NumberFormat().format(newValue);
        showValue(formattedResult);
    } else {
        showValue(originalValue);
    }
}

function deleteFromRight() {
    let valueWithoutCommas = document.getElementById("result").value.replaceAll(',', '');
    console.log("valueWithoutCommas", valueWithoutCommas)
    setResult(valueWithoutCommas.slice(0, -1));
}