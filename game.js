const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

function newGame() {
    // Set blank canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    c.fillRect(0,0, canvas.width, canvas.height);

    makeBlocks();
    makePlayer();
    makeBall();
    
}

function makeBlocks() {
    let blockWidth = window.innerWidth / 10;
    // Make rows
    for (let j = 0; j < 4; j++) {
        // Fill rows
        for (let i = 0; i < 10; i++) {
            c.beginPath();
            c.strokeStyle = 'white';
            c.rect(blockWidth * i, j * 50, blockWidth, 50);
            c.stroke();
            c.closePath();
        }
    }  
}

function makePlayer() {
    let playerWidth = window.innerWidth / 8;
    c.beginPath();
    c.strokeStyle = 'white';
    c.rect(window.innerWidth / 2 - (playerWidth / 2), window.innerHeight / 1.1, playerWidth, 10);
    c.stroke(); 
    c.closePath();
}

function makeBall() {
    let playerWidth = window.innerWidth / 8;
    c.beginPath();
    c.strokeStyle = 'white';
    c.arc(window.innerWidth / 2, window.innerHeight / 1.1 - 10, 10, 0, 2 * Math.PI);
    c.stroke();
    c.closePath();
}

newGame();