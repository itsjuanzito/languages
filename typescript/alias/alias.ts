// Type alias

/* basicamente, os type alias servem pra gente definir tipos de entrada para nossos parametros, por exemplo, podemos criar um tipo que só vai aceitar números, ou um tipo que só vai aceitar string ou booleanos. Também podemos passar interfaces nos tipos, ou seja, meu parametro só vai aceitar um valor que satisfaça aquela interface */

interface User {
    name: string,
    age: number,
    wallet?: { // ? opcional 
        coins: number,
    }
}

type user = User
type Input = string | number | string[] // esse pipe | aje como um "ou", então ele aceita number ou string ou um array de strings

type Admin = user & {
    kick(user: User): void
    ban(user: User): void
} 

const promptText = (texto: Input, user: user) => {
    return { texto, user }
}

const promoteUser = (user: user): Admin => {
    return {
        ...user,
        ban(user) {
            console.log("Oi")
        },
        kick(user) {
            console.log("ola´")
        }
    }
}

const createUser = (user: user): user => {
    return user
}

const richard = createUser({ name: "richard2", age: 20 })
const richardAdmin = promoteUser(richard)

const user1 = promptText("olá", { name: "richard", age: 15, wallet: { coins: 15 } })
const user2 = promptText("olá", { name: "angelina", age: 15, wallet: { coins: 15 } })


console.log(user1, user2)

console.log(richardAdmin)