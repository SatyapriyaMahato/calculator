const equalBtn = document.querySelector(".equal-btn");
const inputNum = document.querySelector(".input");
const numsInput = [...document.querySelectorAll(".num")];

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
        equalBtn.style.color = "#fff";
    }
}

const themeInputs = document.querySelectorAll('.upwrap .custom-radio-button input')
themeInputs.forEach(function (input) {
    input.addEventListener('change', radio_change);
});

radio_change();

let str = "";
numsInput.forEach(function (num) {

    num.addEventListener("click", function (e) {
        e.preventDefault();
        str += num.textContent;
        console.log(str);
        inputNum.value = str;
    })

})