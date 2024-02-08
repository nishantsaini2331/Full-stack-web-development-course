const btn = document.getElementById("genPass");
const newPass = document.getElementById("newPass");
const slider = document.getElementById("range");
const rangeVal = document.getElementById("rangeVal");
const upprCase = document.getElementById("capLet");
const lowerCase = document.getElementById("samLet");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const copyBtn = document.getElementById("copyBtn");

rangeVal.innerText = slider.value;

slider.addEventListener("input", (e) => {
    rangeVal.innerText = e.target.value;
});

btn.addEventListener("click", () => {
    let capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smallLetter = "abcdefghijklmnopqrstuvwxyz";
    let numberStr = "0123456789";
    let symbolsStr = "~`!@#$%^&*()_+}{";
    let finalStr = "";

    if (upprCase.checked) {
        finalStr += capitalLetter;
    }

    if (lowerCase.checked) {
        finalStr += smallLetter;
    }
    if (number.checked) {
        finalStr += numberStr;
    }
    if (symbol.checked) {
        finalStr += symbolsStr;
    }

    if (finalStr === "") {
        alert("Please Select atleast one option");
    }

    let latestPass = "";

    for (let i = 0; i < slider.value; i++) {
        let randNum = Math.floor(Math.random() * finalStr.length);
        // latestPass += finalStr[randNum]
        latestPass += finalStr.charAt(randNum);
    }
    newPass.innerText = `${latestPass}`;
});

copyBtn.addEventListener("click", () => {
    if (!newPass.innerText) {
        alert("No Password to Copy");
        return;
    }
    window.navigator.clipboard.writeText(newPass.innerText);
    alert("Password Copied");
});
