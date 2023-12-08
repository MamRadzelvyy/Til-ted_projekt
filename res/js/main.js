const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");

canvas .width = 1280;
canvas .height = 720;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 1280, 720);

ctx.fillStyle = "orange";
ctx.fillRect (100, 200, 100, 200);

ctx.strokeStyle = "red";
ctx.strokeRect (400, 200, 100, 200);
ctx.strokeRect (100, 200, 100, 200);


ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(160, 100);
ctx.lineTo(520, 400);
ctx.lineTo(50, 300);
ctx.lineTo(50, 50);
ctx.lineTo(330, 70);
ctx.lineTo(100, 70);
ctx.stroke()

ctx.beginPath();
ctx.arc(600, 75, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(620, 65, 10, 0, 2 * Math.PI);
ctx.fill()

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(580, 65, 10, 0, 2 * Math.PI);
ctx.fill()

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.lineTo(560, 85);
ctx.lineTo(580, 98);
ctx.lineTo(620, 98);
ctx.lineTo(640, 85);
ctx.stroke()