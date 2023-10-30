class heroClass {

    constructor(heroName, heroAge, heroType) {
        this.heroName = heroName;
        this.heroAge = heroAge;
        this.heroType = heroType;
    }

    heroAttack() {

        if(this.heroType == "Mago") {

            console.log(`O ${this.heroType} atacou usando Magia.`);
        
        } else if(this.heroType == "Guerreiro") {

            console.log(`O ${this.heroType} atacou usando Espada.`);

        } else if(this.heroType == "Monge") {

            console.log(`O ${this.heroType} atacou usando Artes Marciais.`);

        } else if(this.heroType == "Ninja") {

            console.log(`O ${this.heroType} atacou usando Shuriken.`);

        } else {

            console.log("Escolha sua habilidade para começar.");

        }

    }

}

let finalPlayer = new heroClass("RibeiroHeroi", 20, "Mago");
finalPlayer.heroAttack();