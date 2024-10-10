class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo =tipo;
    }

    atacar(){
        let ataque;
        if(this.tipo === 'mago'){
            ataque = "No ataque usou a magia"
        }else if(this.tipo === 'guerreiro'){
            ataque = "No ataque usou a espada"
        }else if(this.tipo === 'monge'){
            ataque = "no ataque usou as artes marciais"
        }else{
            ataque = "usou o atsque shurikem"
        }

            return `O ${this.tipo} usou o ataque ${ataque}`
    }

}
const hero = new Heroi("Cintia", 35, "mago");
console.log(hero.atacar());