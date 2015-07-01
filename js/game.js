var canvas = document.getElementById('Scene');
var context = canvas.getContext('2d');
var FPS = 60;

function update() {
    
}

function draw() {
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    //drawing code
}

// game loop
setInterval(function() {
    update();
    draw();
}, 1000 / FPS);