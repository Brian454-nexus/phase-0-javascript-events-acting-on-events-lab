// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const left = parseInt(dodger.style.left.replace("px", ""), 10);
    
    if (left > 0) { // Prevent moving beyond the left edge
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const left = parseInt(dodger.style.left.replace("px", ""), 10);
    const gameWidth = 400; // Assuming the game field width is 400px
    const dodgerWidth = 40; // The dodger is 40px wide

    if (left < gameWidth - dodgerWidth) { // Prevent moving beyond the right edge
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});

