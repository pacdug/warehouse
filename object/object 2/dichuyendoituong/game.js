const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const hero = new Hero(275, 175, 20);

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp') hero.moveUp();
    if (event.key === 'ArrowDown') hero.moveDown();
    if (event.key === 'ArrowLeft') hero.moveLeft();
    if (event.key === 'ArrowRight') hero.moveRight();
    draw();
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hero.draw(ctx);
}

draw();
