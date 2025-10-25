// não é muito complicado, basicamente é o retorno da função

const mainFunction = (say: string, author?: string): string => { // retorna uma string, não pode ser outro tipo
    if (author) return `Mensagem enviada por: ${author}, mensagem: ${say}`
    // convensão comum verificar se o parametro existe, porque a resposta pode ser diferente, se ele é opcional pode não ser enivado

    return `${say}, ${author}`
}

console.log(mainFunction("olá mundo"))
console.log(mainFunction("olá mundo", "richard"))

// quuando a função tem muitos parametros, é convensão criar uma interface pra pegar esses parametros

interface CustomLogOptions {
    color?: string,
    author?: string
}

// também é comum dar o nome da interface o mesmo nome da função, adicionando o nome do parametro a frente
const customLog = (say: string, options: CustomLogOptions = {}) => { // = {} é pra definir o valor padrão caso nada seja enviado
    // pegando os dados da interface por meio de desestruturação, esse = green, define o valor padrão
    const { color = "green" , author } = options

    if (author) console.log(say, author, color)
}

customLog("olá de novo", { color: "red", author: "richard"})
customLog("olá de novo", { author: "richard"}) // sem passar argumento vira green, já que foi definido antes