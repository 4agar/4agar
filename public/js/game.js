var FPS = 60;

function update () {
    
}

function draw() {
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    
    context.clearRect(0, 0, canvas.width, canvas.height); //Clearing canvas
    //drawing code
}

// game loop
setInterval(function () {
    update();
    draw();
}, 1000 / FPS);
