const radio_change = function () {
    const checked = document.querySelector('.upwrap .custom-radio-button input:checked');
    const thNum = checked.parentElement.querySelector('.label_text').innerHTML;
    document.body.className = "";
    document.body.classList.add(`theme-${thNum}`);
    if (thNum == 2 || thNum == 3) {
        document.getElementById('top').style.color = "var(--text)";
        document.getElementById('input').style.color = "var(--text)";
        document.getElementById('equalBtn').style.color = "var(--main-bg)";

    } else {
        document.getElementById('top').style.color = "#fff";
    }
}

const inputs = document.querySelectorAll('.upwrap .custom-radio-button input')
inputs.forEach(function (input) {
    input.addEventListener('change', radio_change);
});

radio_change();