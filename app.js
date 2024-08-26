let boxes = document.querySelectorAll(".box");    // Access all the buttons
let reset = document.querySelector("#RESET-btn");  // Access RESET button

let turn0 = true; // Player's turn

const winpattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
];

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";       // Turn of player O
            turn0 = false;
        } else {
            box.innerText = "X";       // Turn of player X
            turn0 = true;
        }
        box.disabled = true;           // Can't click that box again
        checkwinner();
    });
});

const checkwinner = () => {
    for (let pattern of winpattern) {
        let position1val = boxes[pattern[0]].innerText;
        let position2val = boxes[pattern[1]].innerText;
        let position3val = boxes[pattern[2]].innerText;

        if (position1val !== "" && position1val === position2val && position1val === position3val) {
            console.log('Winner:', position1val);
            disableAllBoxes();
            displayWinner(position1val);
            return;
        }
    }
};

const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const displayWinner = (winner) => {
    // Display the winner in any way you prefer, e.g., alert or DOM manipulation
    alert(`Winner: ${winner}`);
};

// Reset button functionality
reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turn0 = true;
});
