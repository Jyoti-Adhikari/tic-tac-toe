let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetbtn");
let overlay = document.getElementById("overlay");
let winnerMessage = document.getElementById("winnerMessage");
let newGameBtn = document.getElementById("newGameBtn");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]; 

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.style.pointerEvents = "none"; // Disable further clicks on this box
            checkWinner();
        }
    });
});

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                winnerMessage.innerText = "Congratulations! Winner is " + pos1val;
                overlay.style.display = "flex";
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none"; // Disable all boxes after a win
                });
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

function resetGame() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = "auto";
    });
    turnO = true;
    overlay.style.display = "none";
}
