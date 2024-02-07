

// const btn = document.getElementById("btn")
// const body = document.querySelector("body")

// btn.onclick = () => {
// console.log("heelo from js file")
// }

// btn.onclick = () => {
//     console.log("heelo from js file 2")
// }
    

// btn.addEventListener('click' ,  (e) => {
//     // const text = e.target.innerText
//     // e.target.innerText = "Submitted"

//     // body.style.backgroundColor = "yellow" 
//     // alert("Errorr")
//     const  isChange  =  confirm("color change ?")
//     // console.log(isChange)   // return  -> true or false

//     if(isChange){
//         const colorName =  prompt("which color"); // user se input lene ke liye
//         console.log(colorName)
//         body.style.backgroundColor = `${colorName}`
//     }
//     // console.log(e.target)
//     console.log("heelo from js file")
// })


const submit = document.getElementById("submit");
const colorName = document.getElementById("colorName")

let p = document.createElement("p")

colorName.addEventListener('input' , (e) => {
    e.preventDefault();
    // console.log(e)
    // body.style.backgroundColor = `${colorName.value}`
    // console.log(colorName.value)
    
    p.innerText = colorName.value
    document.body.appendChild(p)
})


// const btn = document.querySelector("#btn");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });

    

