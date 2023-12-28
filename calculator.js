var arg1 = "", arg2 = "";
isOperatorSet = false;
var operator = ""

function reset() {
    arg1 = "", arg2 = "";
    isOperatorSet = false;
    operator = ""
}

function setArg1(txt) {
    arg1 = arg1.concat(txt)
}

function setArg2(txt) {
    arg2 = arg2.concat(txt)
}

function setArg(txt) {
    if (isOperatorSet) {
        setArg2(txt);
    } else {
        setArg1(txt);
    }
}

function setOperator(op) {
    operator = op;
    isOperatorSet = true;
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

function calculate() {
    let result = compute(operator, Number(arg1), Number(arg2));
    document.getElementById("result").value = result;
    setArg1(result);
}