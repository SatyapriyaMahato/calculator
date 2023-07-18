const equalBtn = document.querySelector(".equal-btn");
resetBtn = document.querySelector(".reset-btn");
delBtn = document.querySelector(".del-btn");
inputNum = document.querySelector(".input");
inputKeys = [...document.querySelectorAll(".num")];


// themes and radio button functionality
const radio_change = function () {
    const checked = document.querySelector('.upwrap .custom-radio-button input:checked');
    const thNum = checked.parentElement.querySelector('.label_text').innerHTML;
    document.body.className = "";
    document.body.classList.add(`theme-${thNum}`);
    if (thNum == 2 || thNum == 3) {
        document.getElementById('top').style.color = "var(--text)";
        document.getElementById('input').style.color = "var(--text)";
        equalBtn.style.color = "var(--main-bg)";

    } else {
        document.getElementById('top').style.color = "#fff";
        document.getElementById('input').style.color = "#fff";
        equalBtn.style.color = "#fff";
    }
}
const themeInputs = document.querySelectorAll('.upwrap .custom-radio-button input')
themeInputs.forEach(function (input) {
    input.addEventListener('change', radio_change);
});
radio_change();

// readonly control
document.addEventListener('click', (event) => {
    if (!inputNum.contains(event.target)) {
        inputNum.setAttribute('readonly', true);
    }
});

inputNum.addEventListener('click', () => {
    inputNum.removeAttribute('readonly');
});

// virtual keyboard inputs functionality
let str = "";
let maxLen = 15;

let num1 = "";
let num2 = "";
let op = "";
const ops = /^[+\-x\/]+$/;
const allowedKeys = /^[0-9\b\u2190\u2192\.]$/;
const cursorPosition = inputNum.selectionStart;
inputKeys.forEach(function (num) {
    num.addEventListener("click", function (e) {
        let key = num.textContent;
        e.preventDefault();
        if (str === "" && ops.test(key)) {
            e.preventDefault();
        } else {
            if (ops.test(key) && (!op) && (num1.slice(-1) != ".")) {
                op += key;
            }
            if (!ops.test(key)) {

                if (!op) {
                    if (num1.includes(".") && key == ".") {
                        num1 += "";
                    } else {
                        num1 += key;
                    }
                } else {
                    if (num2.includes(".") && key == ".") {
                        num2 += "";
                    } else {
                        num2 += key;
                    }
                }

            }
        }
        str = num1 + op + num2;
        inputNum.value = str;
        console.log(inputNum.value);
        console.log(num1 + " " + op + " " + num2);
        inputNum.focus();
    })

})


// keyboard inputfunctionality
document.addEventListener("keydown", (e) => {
    e.preventDefault();
    let key = e.key;
    if (key == '*') {
        key = 'x';
    }

    if (ops.test(str.slice(-1)) && str.length === 1) {
        num1 = "";
    }

    if (key === "Enter") {
        // e.preventDefault();
        let number1 = parseFloat(num1);
        let number2 = parseFloat(num2);
        str = performOperation(op, number1, number2) + "";
        inputNum.value = str;
        num1 = str;
        num2 = "";
        op = "";
    }

    if (key === "Backspace") {
        if (ops.test(str.slice(-1))) {
            op = "";
        } else {
            if (op) {
                num2 = num2.slice(0, -1);
            } else {
                num1 = num1.slice(0, -1);
            }
        }
    } else {
        if ((str === "" && ops.test(key))) {
            e.preventDefault();
        } else if (ops.test(key) || (allowedKeys.test(key))) {

            if (ops.test(key) && (!op) && (num1.slice(-1) != ".")) {
                op += key;
            }
            if (!ops.test(key)) {

                if (!op) {
                    if (num1.includes(".") && key == ".") {
                        num1 += "";
                    } else {
                        num1 += key;
                    }
                } else {
                    if (num2.includes(".") && key == ".") {
                        num2 += "";
                    } else {
                        num2 += key;
                    }
                }

            }
        }
    }
    str = num1 + op + num2;
    inputNum.value = str;
    inputNum.focus();
    console.log(inputNum.value);
});


// special keys eventlistenere
resetBtn.addEventListener("click", function (e) {
    e.preventDefault();
    num1 = "";
    num2 = "";
    op = "";
    str = "";
    inputNum.value = str;
    inputNum.focus();
});


delBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (ops.test(str.slice(-1))) {
        op = "";
    } else {
        if (op) {
            num2 = num2.slice(0, -1);
        } else {
            num1 = num1.slice(0, -1);
        }
    }
    str = num1 + op + num2;
    inputNum.value = str;
    inputNum.focus();
    console.log(inputNum.value);
});


equalBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let number1 = parseFloat(num1);
    let number2 = parseFloat(num2);
    str = performOperation(op, number1, number2) + "";
    inputNum.value = str;
    num1 = str;
    num2 = "";
    op = "";

})


// operations
const performOperation = (operator, operand1, operand2) => {
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        'x': (a, b) => a * b,
        '/': (a, b) => a / b,
    };

    const operationFunc = operations[operator];

    if (operationFunc) {
        return operationFunc(operand1, operand2);
    } else {
        throw new Error("Invalid operator");
    }
};










