const equalBtn = document.querySelector(".equal-btn");
// const plusBtn = document.querySelector(".plus");
// const minusBtn = document.querySelector(".minus");
// const divideBtn = document.querySelector(".divide");
// const multiplyBtn = document.querySelector(".multiply");
// const decimalBtn = document.querySelector(".decimal");
const resetBtn = document.querySelector(".reset-btn");
const delBtn = document.querySelector(".del-btn");
const inputNum = document.querySelector(".input");
const inputKeys = [...document.querySelectorAll(".num")];


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


// virtual keyboard inputs functionality
let str = "";
const ops = /^[+\-x\.\/]+$/;
const allowedKeys = /^[0-9\b\u2190\u2192]$/;
const cursorPosition = inputNum.selectionStart;
inputKeys.forEach(function (num) {
    num.addEventListener("click", function (e) {
        e.preventDefault();
        if (str === "" && ops.test(num.textContent)) {
            e.preventDefault();
        } else {
            if (ops.test(str.slice(-1)) && ops.test(num.textContent)) {
                e.preventDefault();
            } else {
                str += num.textContent;
            }
        }
        inputNum.value = str;
        console.log(inputNum.value);
        inputNum.focus();
    })

})
resetBtn.addEventListener("click", function (e) {
    e.preventDefault();
    str = "";
    inputNum.value = str;
    inputNum.focus();
    console.log(inputNum.value);
});
delBtn.addEventListener("click", function (e) {
    e.preventDefault();
    str = str.slice(0, -1);
    inputNum.value = str;
    inputNum.focus();
    console.log(inputNum.value);
});

// keyboard inputfunctionality
document.addEventListener("keydown", (e) => {
    let key = e.key;
    if (key == '*') {
        key = 'x';
    }
    e.preventDefault();
    if (key === "Backspace") {
        str = str.slice(0, -1);
    }
    if (str === "" && ops.test(key)) {
        e.preventDefault();
    } else {
        if (ops.test(str.slice(-1)) && ops.test(key) || (!allowedKeys.test(key))) {
            e.preventDefault();
        } else {
            str += key;
        }
    }
    inputNum.value = str;
    console.log(inputNum.value);
    inputNum.focus();
}
);


