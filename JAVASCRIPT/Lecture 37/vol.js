const range = document.getElementById("range");
range.value = 0;
range.style.accentColor = "purple";
let num = document.getElementById("num");
num.innerText = `0%`;
range.addEventListener("input", () => {
  num.innerText = `${range.value}%`;
});
