// OOP
// vlastnosti objektu - atributy
// Šablona - třída (class)
// třída (class) má vždy první písmeno velké
export class Enemy {

    //constructor - metoda ktera sse vola pri vytvoreni objektu
constructor(name, hp, dmg){
//this - ukazuje na vzniklou instanci - kopii od tridy
this.name = name;
this.hp = hp;
this.dmg = dmg;

}
}

//const myEnemy = new Enemy("Enemy 1", 100, 12); //vytvoření kopie od šablony - objekt (instance)


