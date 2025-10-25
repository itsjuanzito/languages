// classes

class Player {
    private name: string
    private health: number

    constructor(name: string) {
        this.name = name
        this.health = 20
    }

    public getName() {
        return this.name
    }

    public getHealth() { // metodo get, serve apenas para retornar
        return this.health
    }

    public damage(amount: number, damager?: Player) {
        const updateHealth = this.health - amount

        console.log(
            damager ? `${damager.getName()} deu ${amount} de dano em ${this.name}` : `${this.name} tomou ${amount} de dano`
        )

        if (updateHealth <= 0) {
            this.health = 0
            this.die(damager)
            return
        }

        this.health = updateHealth
    }

    private die(damager?: Player) {
        if (damager) { 
            console.log(`${this.name} foi morto por ${damager.getName()}`) 
            return 
        }

        console.log(this.name, "morreu")
    }
}

const player = new Player("Richard")
const player2 = new Player("Kayo")

console.log(player.getHealth())

player.damage(100, player2)

console.log(player.getHealth())

