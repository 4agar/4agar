var Circle = function (id, x, y, radius, color, strokeColor) {
    this.id = id;
    this.centerX = x / 2;
    this.centerY = y / 2;
    this.radius = radius;
    this.color = color;
    this.strokeColor = strokeColor;
};

function drawCircle (centerX, centerY, radius, color, strokeColor) {
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 5;
    context.StrokeStyle = strokeColor;
    context.stroke();
}