const ticTac = document.querySelector(".ticTac");
const boxes = document.querySelectorAll(".box");
const h1 = document.getElementsByTagName("h1");
const rBtn = document.getElementById("rstbtn");
console.log(h1);

let currentPlayer = "X";
let count = 0;

let winingCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function eventStart(e) {
    if (e.target.className !== "ticTac") {
        if (e.target.innerText === "") {
            e.target.textContent = currentPlayer;
            count++;
            winner();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }

        if(count === 9){
            h1[0].innerText = `Match Draw`;
        }
    
    }
}

function gameStart(){
    ticTac.addEventListener("click", eventStart);
}



function winner() {
    winingCondition.forEach((item) => {
        // let index0 = item[0];
        // let index1 = item[1];
        // let index2 = item[2];
        // console.log( index0 , index1 , index2)
        let val0 = boxes[item[0]].innerText;
        let val1 = boxes[item[1]].innerText;
        let val2 = boxes[item[2]].innerText;
        console.log(item[0] , val0 , item[1] , val1 , item[2] , val2 )
        if (val0 !== "" && val1 !== "" && val2 !== "") {
            console.log("1st check")
            if (val0 === val1 && val0 === val2) {
                console.log("final check")
                boxes[item[0]].classList.add("winnerClass")
                boxes[item[1]].classList.add("winnerClass")
                boxes[item[2]].classList.add("winnerClass")
                count = 0
                h1[0].innerText = `Winner is ${val1}`;
                ticTac.removeEventListener("click", eventStart);
            }
        }
    });
}

rBtn.addEventListener("click", () => {
    currentPlayer = "X";
    h1[0].innerText = "Tic Tac Toe";
    boxes.forEach((item) => {
        item.classList.remove("winnerClass")
        item.innerText = "";
    });

    gameStart();
});



gameStart();