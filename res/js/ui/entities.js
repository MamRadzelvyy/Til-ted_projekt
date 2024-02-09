// OOP
// vlastnosti objektu - atributy
// Šablona - třída (class)
// třída (class) má vždy první písmeno velké

export class Enemy {
//static - dana vec patri tride (v tomto pripade tride Enemy)
//Vec pouzivame pomoci zapisu Trida.vec
//Enemy.entitiesData
static entitiesData;

  //constructor - metoda ktera sse vola pri vytvoreni objektu
  constructor(name, hp, dmg, imagePath, width, height, velocity, type) {
    //this - ukazuje na vzniklou instanci - kopii od tridy
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.imagePath = imagePath;
    this.img = new Image();
    this.img.src = this.imagePath;
    this.position = {
      x: 0,
      y: 0,
    };
    if (type === "ground"){
      this.position.y = 450
    }
    this.ratio = 1;
    this.size = {
      width: width * this.ratio,
      height: height * this.ratio,
    };
    this.velocity = {
        x: velocity,
    },
    this.type = type;
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  setType(type) {
    const paths = [
      "./res/img/boss/battle_bus.png",
      "./res/img/boss/BOSS.png",
      "./res/img/boss/fnkid.png",
      "./res/img/boss/kevin.png",
      "./res/img/boss/mecha.png",
    ];
    this.path = paths[type];
  }

  update() {
this.move();
  }

  move(){
this.position.x+= this.velocity.x;
if(this.position.x >= 550){
this.velocity.x *= -1;
}
if(this.position.x <= 0){
this.velocity.x *= -1;
}
  }
}

//const myEnemy = new Enemy("Enemy 1", 100, 12); //vytvoření kopie od šablony - objekt (instance)
const foo = new Enemy("ASd", 1, 1, 0);
