import { Enemy } from "./ui/entities.js";
import { Background } from "./ui/basic-ui.js";
import { Twins } from "./ui/twins.js";


const background = new Background();
const twins = new Twins(500, 495, 50, 245, 610);


let mouse = {
x:0,
y:0
};

document.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect()
mouse.x = ((e.clientX - rect.left)/(rect.right - rect.left))*canvas.width;
mouse.y= ((e.clientY - rect.top)/(rect.bottom - rect.top))*canvas.height;
for (const enemy of enemies) {
  if (enemy.detectCollision(mouse)) break;
}
});

const enemies = [];

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const gameLoop = () => {
  //clear
  clear();
  //update
  update();
  //render
  render();
  //fps
  fps();
  //gameLoop znovu
  window.requestAnimationFrame(gameLoop);
};

const clear = () => {
  canvas.width = 1280;
  canvas.height = 720;
  background.draw(ctx);
};

// OOP
// vlastnosti objektu - atributy
const enemy = {
  hp: 100,
  name: "Enemy1",
  dmg: 12,
};

const update = () => {
    enemies.map((a)=> {
        a.update();
        twins.detectCollision(a);
    })
};
const render = () => {
  twins.draw(ctx);
    enemies.map((a)=>{
       a.draw(ctx) 
    })
};
const fps = () => {};

const loadData = async () => {
  const entitiesFile = await fetch("./res/data/entities.json");
  const data = await entitiesFile.json();
  Enemy.entitiesData = data;
};

const genEnemies = () => {
    Enemy.entitiesData.map((a)=> {
        //push - prida novou vec do pole
        enemies.push(new Enemy(a.name,a.hp,a.dmg,a.imagePath,a.width,a.height,a.velocity,a.type))
    })
}

window.onload = async () => {
  await loadData();
  console.log(Enemy.entitiesData);
  genEnemies();
  console.log(enemies);
  window.requestAnimationFrame(gameLoop);
};

/*
const battleBus = new Image();
battleBus.src = "./res/img/boss/battle_bus.png";

let bossPaths = [
"./res/img/boss/battle_bus.png",
 "./res/img/boss/BOSS.png",
 "./res/img/boss/fnkid.png",
 "./res/img/boss/kevin.png",
 "./res/img/boss/mecha.png",
];

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


let bus = {
    x: 200,
    y: 200,
    xVelocity: 1,
    yVelocity: 1,
}



window.onload = () => {
  setInterval(() => {

if (canvas.width <= bus.x + 200){
    bus.xVelocity *= -1;
battleBus.src = bossPaths[1];

}
if (bus.x <= 0){
    bus.xVelocity *= -1;
    battleBus.src = bossPaths[3];
}
if (canvas.height <= bus.y + 200){
    bus.yVelocity *= -1;
    battleBus.src = bossPaths[2];
}
    if (bus.y <= 0){
        bus.yVelocity *= -1;
        battleBus.src = bossPaths[4];
    }


    bus.x += bus.xVelocity;
    bus.y += bus.yVelocity;
    ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 1280, 720);
  ctx.drawImage(battleBus, bus.x, bus.y, 200, 200);
  }, 10); 
}
*/
