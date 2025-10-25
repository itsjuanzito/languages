// TUplas

/* bom, as tuplas são parecidas com os arrays, vamos lá */

type tupleDate = [number, number, number]
type tupleDateWithObjects = [day: number, month: number, year: number] // podemos usar objetos pra identificar cada tipo

// basicamente, criamos um tipo que pra ser aceito tem que obrigatoriamente haver 3 números

const date: tupleDate = [10, 20, 30] // criamos uma variavel do tipo tupledate, e tem que ter 3 números
const dateWithObjects: tupleDateWithObjects = [10, 24, 2025] // quando passa o mouse por cima do tipo, ajuda a identificar

// exemplo de arrays, a diferença é que podemos colocar quanto quisermos, ou iniciar ele vazio
type arrayEmpty = number[]

const array: arrayEmpty = [103, 2903, 102433, 30483]

// podemos fazer desestruturação das tuplas também

const createDate = (date: tupleDateWithObjects) => {
    const [day, month, year] = date // desestruturação
    return `Data: ${day}/${month}/${year}`
}

console.log(createDate(dateWithObjects))